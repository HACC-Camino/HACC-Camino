import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Grid, Header, Loader } from 'semantic-ui-react';
import { VaccineDatas } from '../../api/vaccine/VaccineDataCollection';
import VaccinationCard from '../components/vaccine/VaccinationCard';
import HistoryCard from '../components/covid-status/HistoryCard';
import { HealthStatuses } from '../../api/health-status/HealthStatusCollection';
import GetPhotoModal from '../components/vaccine/GetPhotoModal';

const padding = { paddingTop: 30, marginLeft: 35 };

const Health = (
    {
      ready,
      historyHealthStatus,
      vaccineData,
    },
) => (ready ? (
        <div style={padding}>
          <Grid container stackable>
            <Grid.Row>
              <Grid.Column>
                <Header as={'h1'} content={'Health Page'} color='yellow'/>
              </Grid.Column>
            </Grid.Row>

              <Grid.Column computer={16}>
                <HistoryCard healthStatus={historyHealthStatus} />
              </Grid.Column>
              <Grid.Column computer={16}>
                <VaccinationCard vaccineData={vaccineData}/>
              </Grid.Column>
              <Grid.Row>
                  <Grid.Column>
                      <GetPhotoModal vaccineData={vaccineData}/>
                  </Grid.Column>
              </Grid.Row>
          </Grid>
        </div>
      ) :
      <Loader active>Getting User Data</Loader>
);

Health.propTypes = {
  ready: PropTypes.bool.isRequired,
  historyHealthStatus: PropTypes.array.isRequired,
  vaccineData: PropTypes.array.isRequired,
};

export default withTracker(() => {
  const username = Meteor.user()?.username;
  const ready = HealthStatuses.subscribeHealthStatus().ready()
  && VaccineDatas.subscribeVaccine().ready()
  && username !== undefined;
  const historyHealthStatus = HealthStatuses.getHealthStatusesSortedDate(username);
  // console.log(historyHealthStatus);
  const vaccineData = VaccineDatas.getUserVaccineData(username);
  return {
    ready,
    historyHealthStatus,
    vaccineData,
  };
})(Health);
