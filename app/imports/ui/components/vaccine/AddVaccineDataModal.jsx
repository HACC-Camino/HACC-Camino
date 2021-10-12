import React, { useState } from 'react';
import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import {
  AutoForm,
  DateField,
  SubmitField,
  TextField,
  SelectField,
} from 'uniforms-semantic';
import { Button, Modal, Header, Form } from 'semantic-ui-react';
import swal from 'sweetalert';
import AWS from 'aws-sdk';
import { VaccineDataDefineMethod } from '../../../api/vaccine/VaccineDataCollection.methods';

const S3_BUCKET = 'lumi-camino-main';
const REGION = 'us-west-1';

AWS.config.update({
  accessKeyId: '',
  secretAccessKey: '',
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const AddVaccineDataModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const allVaccines = ['Pfizer-BioNTech COVID-19', 'Moderna COVID-19',
  'Janssen COVID-19 (Johnson & Johnson)', 'AstraZeneca-AZD1222',
  'Sinopharm BIBP-SARS-CoV-2', 'Sinovac-SARS-CoV-2', 'Gamelya-Sputnik V',
  'CanSinoBio', 'Vector - EpiVacCorona', 'Zhifei Longcom - Recombinant Novel', 'IMBCAMS -SARS-CoV-2', 'Novavax'];

  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const formSchema = new SimpleSchema({
    vaccineName: { type: String, label: 'Vaccine Name', allowedValues: allVaccines },
    fDoseLotNum: { type: String, label: 'Manufacturer Lot Number' },
    fDoseDate: { type: Date, label: 'Date' },
    fDoseSite: { type: String, label: 'Healthcare Professional or Clinic Site' },
    sDoseLotNum: { type: String, label: 'Manufacturer Lot Number' },
    sDoseDate: { type: Date, label: 'Date' },
    sDoseSite: { type: String, label: 'Healthcare Professional or Clinic Site' },
  });

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = (file) => {
    // the function below creates a new name for the image being uploaded.
    const makeId = (length) => {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    };
    // figures out what kind of file it is and appends to the randomly generated key.
    const filetype = file.name.split('.')[1];
    let filename = makeId(25);
    filename = `${filename}.${filetype}`;

    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: filename,
    };

    myBucket.putObject(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        // eslint-disable-next-line no-console
        if (err) console.log(err);
      });

    return filename;
  };

  const handleSubmit = (data) => {
    const { vaccineName, fDoseLotNum, fDoseDate, fDoseSite, sDoseLotNum, sDoseDate, sDoseSite } = data;
    const awsKey = uploadFile(selectedFile); // upload File
    const owner = Meteor.user().username;
    VaccineDataDefineMethod.call({
      owner, vaccineName, fDoseLotNum, fDoseDate,
      fDoseSite, sDoseLotNum, sDoseDate, sDoseSite, awsKey },
    (error) => (error ?
    swal('Error', error.message, 'error') :
    swal('Success', 'Vaccine Data Added Successfully', 'success').then(() => handleModalClose())));
  };
  const bridge = new SimpleSchema2Bridge(formSchema);

  return (
  <Modal size='small'
         closeIcon
         open={modalOpen}
         onClose={handleModalClose}
         onOpen={handleModalOpen}
         trigger={<Button className="ui form button">Add Vaccine Data</Button>}
         as={AutoForm}
         schema={bridge}
         onSubmit={data => handleSubmit(data)}
         style = {{ fontSize: '13px' }}
  >
    <Modal.Header>Add Vaccine Data</Modal.Header>
    <Modal.Content scrolling>
      <SelectField id='vaccineName' name='vaccineName' showInlineError={true} placeholder={'Vaccine'}/>
      <Header as='h3' dividing>First Dose</Header>
      <Form.Group widths={'equal'}>
        <TextField id='fDoseLotNum' name='fDoseLotNum' showInlineError={true} placeholder={'Manufacturer Lot Number'}/>
        <TextField id='fDoseSite' name='fDoseSite' showInlineError={true}
                   placeholder={'Healthcare Professional or Clinic Site'}/>
      </Form.Group>
      <DateField name='fDoseDate'
                 max={new Date()}
      />
      <Header as='h3' dividing>Second Dose</Header>
      <Form.Group widths={'equal'}>
        <TextField id='sDoseLotNum' name='sDoseLotNum' showInlineError={true} placeholder={'Manufacturer Lot Number'}/>
        <TextField id='sDoseSite' name='sDoseSite' showInlineError={true}
                   placeholder={'Healthcare Professional or Clinic Site'}/>
      </Form.Group>
      <DateField name='sDoseDate'
                 max={new Date()}
      />
      <Header as='h3' dividing>Upload Vaccine</Header>

      {/* Choose filename to upload */}
      <p>File upload progress = {progress}%</p>
      <input type='file' onChange={handleFileInput}/>
    </Modal.Content>
    <Modal.Actions>
      <SubmitField className="ui form button" value='Submit' />
    </Modal.Actions>
  </Modal>
  );
};

export default AddVaccineDataModal;
