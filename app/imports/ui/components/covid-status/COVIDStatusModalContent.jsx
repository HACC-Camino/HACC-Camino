import React from 'react';
import { Divider, Grid, Header, Icon, List, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Disclaimer from '../Disclaimer';

const COVIDStatusModalContent = ({ covidStatus, healthStatus, vaccineStatus }) => (
      <Modal.Content scrolling>
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column computer={10}>
              <Header as={'h3'} size={'large'} style={{ color: covidStatus.iconColor }}>
                <Icon
                  name={covidStatus.icon}
                />
                <Header.Content>{covidStatus.healthPageHeader}</Header.Content>
              </Header>
            </Grid.Column>
            <Grid.Column computer={5} verticalAlign={'middle'}>
              <List size={'big'}>
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
  covidStatus: PropTypes.object.isRequired,
  healthStatus: PropTypes.object.isRequired,
  vaccineStatus: PropTypes.string.isRequired,
};

export default COVIDStatusModalContent;
