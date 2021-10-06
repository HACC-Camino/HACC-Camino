import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Header, Icon, List, Modal } from 'semantic-ui-react';
import {
  covidStatuses,
  getCOVIDStatusIndex,
  getVaccineStatus,
} from './utilities/health-analysis-utilites';
import COVIDStatusModalContent from './COVIDStatusModalContent';

const COVIDStatusCard = ({ healthStatus, vaccineData, page }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const covidIndex = getCOVIDStatusIndex(healthStatus);
  const covidStatus = covidStatuses[covidIndex];
  const vaccineStatus = getVaccineStatus(vaccineData[0]);

  return (
      <Card fluid>
        <Card.Content style={{ paddingBottom: 10 }}>
          <Header as={'h3'}>
            <Icon
              name={covidStatus.icon}
              style={{ color: covidStatus.iconColor }}
              size={'big'}
            />
            <Header.Content>
              {covidStatus.header}
              <Header.Subheader>{(new Date()).toLocaleString()}</Header.Subheader>
              {covidIndex !== 0 && page === 'home' ?
                <List horizontal>
                  <List.Item>
                    <List.Header>Vaccination</List.Header>
                    {vaccineStatus}
                  </List.Item>
                  <List.Item>
                    <List.Header>Health Symptom</List.Header>
                    {healthStatus.clear ? 'Clear' : 'Not Clear'}
                  </List.Item>
                </List> : null
              }
            </Header.Content>
          </Header>
        </Card.Content>
        {covidIndex !== 0 ?
          <Card.Content style={{ height: 35, paddingTop: 7 }}>
            <Header as={'h3'}>
              <Icon
                name={covidStatus.icon}
                style={{ color: '#FFFFFF' }}
                size={'big'}
              />
              <Header.Content>
                <Header.Subheader>
                  View Details
                  <Modal
                    size='small'
                    closeIcon
                    open={modalOpen}
                    onClose={handleModalClose}
                    onOpen={handleModalOpen}
                    trigger={<Icon name={'angle double right'} link/>}
                  >
                    <Modal.Header
                      as={'h2'}
                      content={`COVID STATUS ON ${healthStatus.date.toLocaleString()}`}
                    />
                    <COVIDStatusModalContent
                      covidStatus={covidStatus}
                      healthStatus={healthStatus}
                      vaccineStatus={vaccineStatus}
                    />
                    <Modal.Actions>
                      <Button
                        className="ui form button"
                        onClick={() => handleModalClose()}
                        content={'Close'}/>
                    </Modal.Actions>
                  </Modal>
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Card.Content> : null
        }
      </Card>
  );
};

COVIDStatusCard.propTypes = {
  healthStatus: PropTypes.object,
  vaccineData: PropTypes.array.isRequired,
  page: PropTypes.string.isRequired,
};

export default COVIDStatusCard;
