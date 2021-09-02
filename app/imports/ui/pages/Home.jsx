import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Grid, Header, Loader } from 'semantic-ui-react';
import ResourcesCard from '../components/home/ResourcesCard';
import CheckInCard from '../components/home/CheckInCard';
import VaccinationCard from '../components/home/VaccinationCard';
import COVIDStatusMessage from '../components/home/COVIDStatusMessage';

const Home = (
    {
      ready,
      healthStatus,
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
                <COVIDStatusMessage
                    healthStatus={healthStatus}
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
  healthStatus: PropTypes.object.isRequired,
  vaccineData: PropTypes.array.isRequired,
};

export default withTracker(() => {
  const username = Meteor.user()?.username;
  const ready = username !== undefined; // delete when collections are ready
  // const ready = HealthStatuses.subscribeHealthStatus().ready()
  //     && Vaccines.subscribeVaccine().ready()
  //     && username !== undefined;
  const healthStatus = {}; // latest Health Status
  const vaccineData = []; // vaccines
  return {
    ready,
    healthStatus,
    vaccineData,
  };
})(Home);
