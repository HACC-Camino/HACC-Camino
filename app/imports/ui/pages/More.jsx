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
            <Header textAlign="left" as="h1" color='yellow'>More Page</Header>
          </Grid.Row>
          </div>
          <Grid.Row>
            <Grid.Column>
              <Icon name='user' size='large' color='yellow'/>
            </Grid.Column>
            <Grid.Column>
              <Header textAlign='left' size='large' color='yellow'>Profile</Header>
            </Grid.Column>
          </Grid.Row>

        <Divider/>

          <Grid.Row>
            <Grid.Column>
              <Icon name='building' size='large' color='yellow'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header color='yellow'>Campus Settings</Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon size="big" name="angle right" color='yellow'/>
            </Grid.Column>
          </Grid.Row>

          <Divider/>

          <Grid.Row>
            <Grid.Column>
              <Icon name='bell' size='large' color='yellow'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header color='yellow'>Notification Settings</Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon size="big" name="angle right" color='yellow'/>
            </Grid.Column>
          </Grid.Row>

          <Divider/>

          <Grid.Row>
            <Grid.Column>
              <Icon name='users' size='large' color='yellow'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header color='yellow'>   Affiliation Status</Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon size="big" name="angle right" color='yellow'/>
            </Grid.Column>
          </Grid.Row>

          <Divider/>

          <Grid.Row>
            <Grid.Column>
              <Icon name='home' size='large' color='yellow'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header color='yellow'>Housing Status</Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon size="big" name="angle right" color='yellow'/>
            </Grid.Column>
          </Grid.Row>

          <Divider/>

          <Grid.Row>
            <Grid.Column>
              <Icon name='wifi' size='large' color='yellow'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header color='yellow'>Online studying/working status</Header>
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
