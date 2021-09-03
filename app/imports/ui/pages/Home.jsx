import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Grid, Header, Loader } from 'semantic-ui-react';
import { VaccineDatas } from '../../api/vaccine/VaccineDataCollection';
import ResourcesCard from '../components/home/ResourcesCard';
import CheckInCard from '../components/home/CheckInCard';
import VaccinationCard from '../components/home/VaccinationCard';
import COVIDStatusModal from '../components/health/COVIDStatusModal';
import { HealthStatuses } from '../../api/health-status/HealthStatusCollection';

const Home = (
    {
      ready,
      todayHealthStatus,
      vaccineData,
    },
) => (ready ? (
          <Grid container stackable>
            <Grid.Row>
              <Grid.Column>
                <Header as={'h2'} content={'On-Campus Check-in'}/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={2}>
              <Grid.Column computer={10}>
                <COVIDStatusModal
                    healthStatus={todayHealthStatus}
                    vaccineData={vaccineData}
                />
                <CheckInCard/>
              </Grid.Column>

              <Grid.Column computer={6}>
                <VaccinationCard vaccineData={vaccineData}/>
                <ResourcesCard/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      ) :
      <Loader active>Getting Trip Data</Loader>
);

Home.propTypes = {
  ready: PropTypes.bool.isRequired,
  todayHealthStatus: PropTypes.object,
  vaccineData: PropTypes.array.isRequired,
};

export default withTracker(() => {
  const username = Meteor.user()?.username;
  const ready = HealthStatuses.subscribeHealthStatus().ready()
       && VaccineDatas.subscribeVaccine().ready()
       && username !== undefined;
  const todayHealthStatus = HealthStatuses.getTodayHealthStatus(username);
  const vaccineData = VaccineDatas.getUserVaccineData(username);
  return {
    ready,
    todayHealthStatus,
    vaccineData,
  };
})(Home);
