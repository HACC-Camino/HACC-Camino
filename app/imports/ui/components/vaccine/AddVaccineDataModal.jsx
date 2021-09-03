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
import { getDateToday } from '../../utilities/form';
import { VaccineDataDefineMethod } from '../../../api/vaccine/VaccineDataCollection.methods';

const AddVaccineDataModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const allVaccines = ['Pfizer-BioNTech COVID-19', 'Moderna COVID-19',
  'Janssen COVID-19 (Johnson & Johnson)', 'AstraZeneca-AZD1222',
  'Sinopharm BIBP-SARS-CoV-2', 'Sinovac-SARS-CoV-2', 'Gamelya-Sputnik V',
  'CanSinoBio', 'Vector - EpiVacCorona', 'Zhifei Longcom - Recombinant Novel', 'IMBCAMS -SARS-CoV-2', 'Novavax'];

  const formSchema = new SimpleSchema({
    vaccineName: { type: String, label: 'Vaccine Name', allowedValues: allVaccines },
    fDoseLotNum: { type: String, label: 'Manufacturer Lot Number' },
    fDoseDate: { type: Date, label: 'Date' },
    fDoseSite: { type: String, label: 'Healthcare Professional or Clinic Site' },
    sDoseLotNum: { type: String, label: 'Manufacturer Lot Number' },
    sDoseDate: { type: Date, label: 'Date' },
    sDoseSite: { type: String, label: 'Healthcare Professional or Clinic Site' },
  });

  const handleSubmit = (data) => {
    const { vaccineName, fDoseLotNum, fDoseDate, fDoseSite, sDoseLotNum, sDoseDate, sDoseSite } = data;
    const owner = Meteor.user().username;
    VaccineDataDefineMethod.call({
      owner, vaccineName, fDoseLotNum, fDoseDate,
      fDoseSite, sDoseLotNum, sDoseDate, sDoseSite },
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
         trigger={<Button>Add Vaccine Data</Button>}
         as={AutoForm}
         schema={bridge}
         onSubmit={data => handleSubmit(data)}
         style = {{ fontSize: '13px' }}
  >
    <Modal.Header>Add Vaccine Data</Modal.Header>
    <Modal.Content>
      <SelectField id='vaccineName' name='vaccineName' showInlineError={true} placeholder={'Vaccine'}/>
      <Header as='h3' dividing>First Dose</Header>
      <Form.Group widths={'equal'}>
        <TextField id='fDoseLotNum' name='fDoseLotNum' showInlineError={true} placeholder={'Manufacturer Lot Number'}/>
        <TextField id='fDoseSite' name='fDoseSite' showInlineError={true}
                   placeholder={'Healthcare Professional or Clinic Site'}/>
      </Form.Group>
      <DateField name='fDoseDate'
                 max={getDateToday()}
      />
      <Header as='h3' dividing>Second Dose</Header>
      <Form.Group widths={'equal'}>
        <TextField id='sDoseLotNum' name='sDoseLotNum' showInlineError={true} placeholder={'Manufacturer Lot Number'}/>
        <TextField id='sDoseSite' name='sDoseSite' showInlineError={true}
                   placeholder={'Healthcare Professional or Clinic Site'}/>
      </Form.Group>
      <DateField name='sDoseDate'
                 max={getDateToday()}
      />
    </Modal.Content>
    <Modal.Actions>
      <SubmitField value='Submit' />
    </Modal.Actions>
  </Modal>
  );
};

export default AddVaccineDataModal;
