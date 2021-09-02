import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Grid, Header, List } from 'semantic-ui-react';

const VaccinationCard = ({ vaccineData }) => (
      <Card fluid>
        <Card.Content>
          <Header
              as={'h3'}
              content={'Vaccination Card'}
              subheader={
                vaccineData.length ?
                    'Verified' :
                    'You may upload your COVID Vaccination information here for convenience.'
              }
          />
          {vaccineData.length ?
              <List>
                <List.Item>
                  <List.Header>1st Dose COVID-19</List.Header>
                  <List.Description>{vaccineData[0].vaccineName} ({vaccineData[0].fDoseLotNum})</List.Description>
                  <List.Description> {vaccineData[0].fDoseDate.toLocaleDateString()}
                    at {vaccineData[0].fDoseSite}</List.Description>
                </List.Item>
                <List.Item>
                  <List.Header>2nd Dose COVID-19</List.Header>
                  <List.Description>{vaccineData[0].vaccineName} ({vaccineData[0].sDoseLotNum})</List.Description>
                  <List.Description>{vaccineData[0].sDoseDate.toLocaleDateString()}
                    at {vaccineData[0].sDoseSite}</List.Description>
                </List.Item>
              </List> : null
          }
          <Grid.Column textAlign={'center'}>
            <Button
                content={
                  vaccineData.length ?
                      'See Vaccination Card' :
                      'Upload Vaccination Card'
                }
            />
          </Grid.Column>
        </Card.Content>
      </Card>
  );

VaccinationCard.propTypes = {
  vaccineData: PropTypes.array.isRequired,
};

export default VaccinationCard;
