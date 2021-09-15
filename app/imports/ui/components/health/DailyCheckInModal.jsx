import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Modal, List, Form } from 'semantic-ui-react';
import swal from 'sweetalert';
import { healthStatusDefineMethod } from '../../../api/health-status/HealthStatusCollection.methods';

const DailyCheckInModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const [clear, setClear] = useState(true);
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

  const handleSubmit = () => {
    const owner = Meteor.user().username;
    const date = new Date();
    healthStatusDefineMethod.call({
      owner, clear, date },
    (error) => (error ?
    swal('Error', error.message, 'error') :
    swal('Success', 'Vaccine Data Added Successfully', 'success').then(() => handleModalClose())));
  };

  return (
  <Modal size='small'
         closeIcon
         open={modalOpen}
         onClose={handleModalClose}
         onOpen={handleModalOpen}
         trigger={<Button>Complete Daily Check-in</Button>}
         style = {{ fontSize: '17px' }}
  >
    <Modal.Header>Do any of the following apply to you?</Modal.Header>
    <Modal.Content>
      <List>
        <List.Item>
          <h4>- Have you tested positive for COVID-19 and are on home isolation?</h4>
        </List.Item>
        <List.Item>
          <h4>- Check for Symptoms of Illness:
          If you have any symptoms of illness, do not come to campus or the workplace.
          Do you currently have any of the following symptoms
          that are new, worsening, and not attributable to a pre-existing condition?</h4>
        </List.Item>
        <List.Item>
          <List bulleted>
            <List.Item><h4>Fever greater than 100.4 °F or feeling feverish (chills, sweating)</h4></List.Item>
            <List.Item><h4>Cough</h4></List.Item>
            <List.Item><h4>Shortness of breath/difficulty breathing</h4></List.Item>
            <List.Item><h4>Sore throat</h4></List.Item>
            <List.Item><h4>Unexplained muscle/body aches</h4></List.Item>
            <List.Item><h4>Nausea/vomiting or diarrhea</h4></List.Item>
            <List.Item><h4>Loss of senses of taste or smell</h4></List.Item>
            <List.Item><h4>Runny or congested nose</h4></List.Item>
            <List.Item><h4>Headache</h4></List.Item>
            <List.Item><h4>Skin rash</h4></List.Item>
            <List.Item><h4>Chest pain or pressure</h4></List.Item>
          </List>
        </List.Item>
        <List.Item>
          <h4>- Check for Recent COVID-19 Exposure:</h4>
        </List.Item>
        <List.Item>
          <List bulleted>
            <List.Item>
              <h4>Have you traveled out of the state and are currently under quarantine
                orders by the Department of Health or your medical care provider ?</h4>
            </List.Item>
            <List.Item>
              <h4>Are you unvaccinated and have been in close contact
                (less than 6 feet for greater than or equal to 15 minutes, cumulatively,
                over a 24-hour period) with anyone who has an active, diagnosed case of COVID-19?
                Note: Healthcare students/personnel wearing appropriate PPE at ALL TIMES
                while caring for a patient with COVID-19 would NOT be
                considered a close contact (ref. DOH medical advisory #16)</h4>
            </List.Item>
            <List.Item>
              <h4>Has the Department of Health told you that
                you have been in contact with a person with COVID-19 AND you are UNvaccinated?</h4>
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
