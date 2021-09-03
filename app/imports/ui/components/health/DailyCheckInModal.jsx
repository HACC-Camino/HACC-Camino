import React, { useState } from 'react';
import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import {
  AutoForm,
} from 'uniforms-semantic';
import { Button, Modal, List, Form } from 'semantic-ui-react';
import swal from 'sweetalert';
import { getDateToday } from '../../utilities/form';
import { healthStatusDefineMethod } from '../../../api/health-status/HealthStatusCollection.methods';

const DailyCheckInModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const [clear, setClear] = useState(false);
  const handleSymptoms = (e, { value }) => (value === 'true' ? setClear(true) : setClear(false));

  const HandleSymptomsForm = () => (
  <div>
    <Form.Group inline>
      <Form.Radio label='NO'
                  value='true'
                  checked={clear === true}
                  onChange={handleSymptoms}
      />
      <Form.Radio label='YES'
                  value='false'
                  checked={clear === false}
                  onChange={handleSymptoms}
      />
    </Form.Group>
  </div>
  );

  const formSchema = new SimpleSchema({
    clear: Boolean,
  });

  const handleSubmit = () => {
    const owner = Meteor.user().username;
    const date = getDateToday();
    healthStatusDefineMethod.call({
      owner, clear, date },
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
         trigger={<Button>Complete Daily Check-in</Button>}
         as={AutoForm}
         schema={bridge}
         style = {{ fontSize: '17px' }}
  >
    <Modal.Header>Do any of the following apply to you?</Modal.Header>
    <Modal.Content>
      <List>
        <List.Item>
          - Have you tested positive for COVID-19 and are on home isolation?
        </List.Item>
        <List.Item>
          - Check for Symptoms of Illness:
          If you have any symptoms of illness, do not come to campus or the workplace.
          Do you currently have any of the following symptoms
          that are new, worsening, and not attributable to a pre-existing condition?
        </List.Item>
        <List.Item>
          <List bulleted>
            <List.Item>Fever greater than 100.4 °F or feeling feverish (chills, sweating)</List.Item>
            <List.Item>Cough</List.Item>
            <List.Item>Shortness of breath/difficulty breathing</List.Item>
            <List.Item>Sore throat</List.Item>
            <List.Item>Unexplained muscle/body aches</List.Item>
            <List.Item>Nausea/vomiting or diarrhea</List.Item>
            <List.Item>Loss of senses of taste or smell</List.Item>
            <List.Item>Runny or congested nose</List.Item>
            <List.Item>Headache</List.Item>
            <List.Item>Skin rash</List.Item>
            <List.Item>Chest pain or pressure</List.Item>
          </List>
        </List.Item>
        <List.Item>
          - Check for Recent COVID-19 Exposure:
        </List.Item>
        <List.Item>
          <List bulleted>
            <List.Item>
              Have you traveled out of the state and are currently under quarantine
              orders by the Department of Health or your medical care provider ?
            </List.Item>
            <List.Item>
              Are you unvaccinated and have been in close contact
              (less than 6 feet for greater than or equal to 15 minutes, cumulatively,
              over a 24-hour period) with anyone who has an active, diagnosed case of COVID-19?
              Note: Healthcare students/personnel wearing appropriate PPE at ALL TIMES
              while caring for a patient with COVID-19 would NOT be
              considered a close contact (ref. DOH medical advisory #16)
            </List.Item>
            <List.Item>
              Has the Department of Health told you that
              you have been in contact with a person with COVID-19 AND you are UNvaccinated?
            </List.Item>
          </List>
        </List.Item>
      </List>
    </Modal.Content>
    <Modal.Content>
      <HandleSymptomsForm/>
    </Modal.Content>
    <Modal.Actions>
      <button className="ui button" onClick={handleSubmit}>Submit</button>
    </Modal.Actions>
  </Modal>
  );
};

export default DailyCheckInModal;
