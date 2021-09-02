import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Message } from 'semantic-ui-react';

const COVIDStatusMessage = ({ healthStatus, vaccineData }) => {
  const COVIDStatus = 1;
  console.log(healthStatus);
  console.log(vaccineData);

  const messageProperties = [
    {
      color: 'brown',
      icon: 'exclamation',
      header: 'Daily Check-in',
      content: 'Aloha, don\'t hesitate to spend a minute to do the daily check-in. ' +
          'Stay safe and healthy! Mahalo!',
    }, {
      color: 'green',
      icon: 'check',
      header: 'You are clear to come to campus',
      content: '',
    }, {
      color: 'red',
      icon: 'x',
      header: 'Stay at home or in your campus residence',
      content: '',
    },
  ];

  return (
      <Message color={messageProperties[COVIDStatus].color} icon>
        <Icon name={messageProperties[COVIDStatus].icon}/>
        <Message.Content>
          <Message.Header>{messageProperties[COVIDStatus].header}</Message.Header>
          {messageProperties[COVIDStatus].content}
        </Message.Content>

      </Message>
  );
};

COVIDStatusMessage.propTypes = {
  healthStatus: PropTypes.object.isRequired,
  vaccineData: PropTypes.array.isRequired,
};

export default COVIDStatusMessage;
