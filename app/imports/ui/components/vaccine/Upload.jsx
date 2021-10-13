import React, { useState } from 'react';
import AWS from 'aws-sdk';
import { Button, Input, Modal, Progress } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { VaccineDataUpdateMethod } from '../../../api/vaccine/VaccineDataCollection.methods';

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

const Upload = ({ vaccineID }) => {
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => {
      setModalOpen(false);
      // eslint-disable-next-line no-undef
      window.location.reload();
    };

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

        const updateData = { awsKey: filename, _id: vaccineID };
        VaccineDataUpdateMethod.call(updateData, (error) => (error ?
          swal('Error', error.message, 'error') :
          swal('Success', 'Vaccine Data Added Successfully', 'success').then(() => handleModalClose())));
    };

    return (
      <Modal
        size='mini'
        closeIcon
        open={modalOpen}
        onClose={handleModalClose}
        onOpen={handleModalOpen}
        trigger={<Button className="ui form button">Upload Vaccine Card</Button>}
        style = {{ fontSize: '13px' }}
      >
        <Modal.Header>Upload Vaccine</Modal.Header>
        <Modal.Content>
          <Input
            type='file'
            onChange={handleFileInput}
            accept={'.jpg, .jpeg, .png'}
            fluid
          />
          <Progress percent={progress}
                    size={'tiny'}
                    content={'File upload progress'}
                    color={'yellow'}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button className="ui form button"
                  compact
                  onClick={() => uploadFile(selectedFile)}>
            Upload
          </Button>
        </Modal.Actions>
    </Modal>
    );
};

Upload.propTypes = {
  vaccineID: PropTypes.string.isRequired,
};

export default Upload;
