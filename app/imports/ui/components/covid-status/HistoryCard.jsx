import React from 'react';
import PropTypes from 'prop-types';
import { Card, Header } from 'semantic-ui-react';

const HistoryCard = () => (
      <Card fluid>
        <Card.Content>
          <Header
              as={'h3'}
              content={'Check-in History'}
          />
        </Card.Content>
      </Card>
  );

HistoryCard.propTypes = {
  healthStatus: PropTypes.array.isRequired,
};

export default HistoryCard;
