import React from 'react';
import { Divider, Grid, Header, List, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Disclaimer from '../Disclaimer';

const COVIDStatusModalContent = ({ header, healthStatus, vaccineStatus }) => (
      <Modal.Content scrolling>
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column computer={9}>
              <Header as={'h2'} content={header}/>
            </Grid.Column>
            <Grid.Column computer={6}>
              <List size={'huge'}>
                <List.Item>
                  <List.Header>Vaccination</List.Header>
                  {vaccineStatus}
                </List.Item>
                <List.Item>
                  <List.Header>Health Symptom</List.Header>
                  {healthStatus.clear ? 'Clear' : 'Not Clear'}
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden/>
        <Disclaimer/>
      </Modal.Content>
  );

COVIDStatusModalContent.propTypes = {
  header: PropTypes.string.isRequired,
  healthStatus: PropTypes.object.isRequired,
  vaccineStatus: PropTypes.string.isRequired,
};

export default COVIDStatusModalContent;
