import React from 'react';
import PropTypes from 'prop-types';
import { Card, Grid, Header, List } from 'semantic-ui-react';
import AddVaccineDataModal from './AddVaccineDataModal';
import GetPhotoModal from './GetPhotoModal';
import Upload from './Upload';

const VaccinationCard = ({ vaccineData }) => {
  const getButton = () => {
    if (vaccineData.length) {
      if (vaccineData[0].awsKey) {
        return <GetPhotoModal vaccineData={vaccineData}/>;
      }
      return <Upload vaccineID={vaccineData[0]._id}/>;
    }
    return <AddVaccineDataModal/>;
  };

  const getSubHeader = () => {
    if (vaccineData.length) {
      if (vaccineData[0].awsKey) {
        return 'Uploaded';
      }
      return 'Information added';
    }
    return 'You may enter your COVID Vaccination information here, then upload your Vaccination Card for convenience';
  };

  return (
    <Card fluid>
      <Card.Content>
        <Header
          as={'h3'}
          content={'Vaccination Card'}
          subheader={getSubHeader()}
        />
        {vaccineData.length ?
          <List>
            <List.Item>
              <List.Header>1st Dose COVID-19</List.Header>
              <List.Description>{vaccineData[0].vaccineName} ({vaccineData[0].fDoseLotNum})</List.Description>
              <List.Description>
                {`${vaccineData[0].fDoseDate.toLocaleDateString()} @ 
                    ${vaccineData[0].fDoseSite}`}
              </List.Description>
            </List.Item>
            <List.Item>
              <List.Header>2nd Dose COVID-19</List.Header>
              <List.Description>{vaccineData[0].vaccineName} ({vaccineData[0].sDoseLotNum})</List.Description>
              <List.Description>
                {`${vaccineData[0].sDoseDate.toLocaleDateString()} @ 
                    ${vaccineData[0].sDoseSite}`}
              </List.Description>
            </List.Item>
          </List> : null
        }
        <Grid.Column textAlign={'center'}>
          {getButton()}
        </Grid.Column>
      </Card.Content>
    </Card>
  );
};

VaccinationCard.propTypes = {
  vaccineData: PropTypes.array.isRequired,
};

export default VaccinationCard;
