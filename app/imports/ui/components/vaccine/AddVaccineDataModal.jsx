import React, { useState } from 'react';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import {
  AutoForm,
  BoolField,
  DateField,
  ErrorsField,
  SelectField,
  SubmitField,
} from 'uniforms-semantic';
import { Button, Divider, Form, Loader, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';

const AddVaccineDataModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const formSchema = new SimpleSchema({
    inputDate: Date,
    modeOfTransportation: String,
    roundtrip: {
      type: Boolean,
      optional: true,
    },
  });

  const handleSubmit = (data) => {
    console.log(data);
  };
  const bridge = new SimpleSchema2Bridge(formSchema);

  return (
  <Modal size='tiny'
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
  </Modal>
  );
};

export default AddVaccineDataModal;
