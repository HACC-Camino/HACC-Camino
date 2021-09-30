import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Header, Icon, List, Message, Modal } from 'semantic-ui-react';
import {
  covidStatuses,
  getCOVIDStatusIndex,
  getVaccineStatus,
} from './utilities/health-analysis-utilites';
import COVIDStatusModalContent from './COVIDStatusModalContent';

const COVIDStatusModal = ({ healthStatus, vaccineData }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const covidIndex = getCOVIDStatusIndex(healthStatus);
  const covidStatus = covidStatuses[covidIndex];
  const vaccineStatus = getVaccineStatus(vaccineData[0]);

  return (covidIndex === 0 ?
          <Message icon>
            <Icon name={covidStatus.icon}/>
            <Message.Content>
              <Header
                as={'h3'}
                content={covidStatus.header}
                subheader={(new Date()).toLocaleDateString()}
              />
              <br/>
              {covidStatus.content}
            </Message.Content>
          </Message> :
          <Message icon>
            <Icon name={covidStatus.icon} style={{ color: '#001D3D' }}/>
            <Message.Content>
              <Header
                  as={'h3'}
                  content={covidStatus.header}
                  subheader={(new Date()).toLocaleString()}
              />
              <br/>

              <List horizontal>
                <List.Item>
                  <List.Header as={'h3'}>Vaccination</List.Header>
                  {vaccineStatus}
                </List.Item>
                <List.Item>
                  <List.Header as={'h3'}>Health Symptom</List.Header>
                  {healthStatus.clear ? 'Clear' : 'Not Clear'}
                </List.Item>
              </List>
              <Divider/>
              <Modal
                  size='small'
                  closeIcon
                  open={modalOpen}
                  onClose={handleModalClose}
                  onOpen={handleModalOpen}
                  trigger={<p>View Details<Icon name={'angle right'} link/></p>}
              >
                <Message.Header
                    as={'h1'}
                    content={`COVID STATUS ON ${healthStatus.date.toLocaleString()}`}
                />
                <COVIDStatusModalContent
                    header={covidStatus.healthPageHeader}
                    healthStatus={healthStatus}
                    vaccineStatus={vaccineStatus}
                />
                <Modal.Actions>
                  <Button onClick={() => handleModalClose()} content={'Close'}/>
                </Modal.Actions>
              </Modal>
            </Message.Content>
          </Message>
  );
};

COVIDStatusModal.propTypes = {
  healthStatus: PropTypes.object,
  vaccineData: PropTypes.array.isRequired,
};

export default COVIDStatusModal;
