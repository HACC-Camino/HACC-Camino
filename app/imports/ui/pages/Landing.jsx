import React from 'react';
import { Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import SignInModal from '../components/landing/SignInModal';
import SignUpModal from '../components/landing/SignUpModal';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        // <Grid verticalAlign='middle' textAlign='center' container>
        //
        //   <Grid.Column width={4}>
        //     <Image size='small' circular src="/images/meteor-logo.png"/>
        //   </Grid.Column>
        //
        //   <Grid.Column width={8}>
        //     <h1>Welcome to this template</h1>
        //     <p>Now get to work and modify this app!</p>
        //   </Grid.Column>
        //
        // </Grid>
        <Grid centered container>

          <Grid.Row>
            <SignInModal/>
          </Grid.Row>

          <Grid.Row>
            <SignUpModal/>
          </Grid.Row>
        </Grid>
    );
  }
}

export default withRouter(Landing);
