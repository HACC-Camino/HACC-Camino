import React from 'react';
import { Divider, Grid, Header, Icon } from 'semantic-ui-react';

// campus settings
// notification settings
// affiliation status
// housing status
// online studying/working status
const padding = { paddingTop: 20, marginLeft: 35 };

class More extends React.Component {
  render() {
    return (
      <div style={padding}>
      <Grid container>
          <div style={{ marginTop: 30, marginBottom: 30 }}>
          <Grid.Row>
            <Header textAlign="left" as="h1" color='yellow'>
              <Icon name='user' size='large' color='yellow'/>My Profile</Header>
          </Grid.Row>
          </div>
        <Divider/>

          <Grid.Row>
            <Grid.Column>
              <Icon name='heart' size='large' color='yellow'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header color='yellow'>My Health Page</Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon size="big" name="angle right" color='yellow'/>
            </Grid.Column>
          </Grid.Row>

          <Divider/>

          <Grid.Row>
            <Grid.Column>
              <Icon name='calendar check' size='large' color='yellow'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header color='yellow'>Check In</Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon size="big" name="angle right" color='yellow'/>
            </Grid.Column>
          </Grid.Row>

          <Divider/>

          <Grid.Row>
            <Grid.Column>
              <Icon name='history' size='large' color='yellow'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header color='yellow'>My History</Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon size="big" name="angle right" color='yellow'/>
            </Grid.Column>
          </Grid.Row>

          <Divider/>
          <Grid.Row>
            <Grid.Column>
              <Icon name='add' size='large' color='yellow'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header color='yellow'>Add Vaccine Data</Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon size="big" name="angle right" color='yellow'/>
            </Grid.Column>
          </Grid.Row>

      </Grid>
      </div>
    );
  }
}

export default More;
