import React from 'react';
import { Divider, Grid, Header, Icon } from 'semantic-ui-react';

// campus settings
// notification settings
// affiliation status
// housing status
// online studying/working status

class More extends React.Component {
  render() {
    return (

      <Grid container>

          <Grid.Row>
            <Header textAlign="left" size="large">More Page...</Header>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Icon name='user' size='large'/>
            </Grid.Column>
            <Grid.Column>
              <Header textAlign='left' size='large'>Profile</Header>
            </Grid.Column>
          </Grid.Row>

        <Divider/>

          <Grid.Row>
            <Grid.Column>
              <Icon name='building' size='large'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header>Campus Settings</Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon size="big" name="angle right"/>
            </Grid.Column>
          </Grid.Row>

          <Divider/>

          <Grid.Row>
            <Grid.Column>
              <Icon name='bell' size='large'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header>Notification Settings</Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon size="big" name="angle right"/>
            </Grid.Column>
          </Grid.Row>

          <Divider/>

          <Grid.Row>
            <Grid.Column>
              <Icon name='users' size='large'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header>Affiliation Status</Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon size="big" name="angle right"/>
            </Grid.Column>
          </Grid.Row>

          <Divider/>

          <Grid.Row>
            <Grid.Column>
              <Icon name='home' size='large'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header>Housing Status</Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon size="big" name="angle right"/>
            </Grid.Column>
          </Grid.Row>

          <Divider/>

          <Grid.Row>
            <Grid.Column>
              <Icon name='wifi' size='large'/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header>Online studying/working status</Header>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon size="big" name="angle right"/>
            </Grid.Column>
          </Grid.Row>

      </Grid>
    );
  }
}

export default More;
