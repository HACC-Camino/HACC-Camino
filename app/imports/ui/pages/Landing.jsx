import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import SignInModal from '../components/landing/SignInModal';
import SignUpModal from '../components/landing/SignUpModal';

const textStyle = { paddingTop: 50 };
/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
        <div className='background-landing' >
        <Grid centered container>
          <Grid.Row>
              <Image size='small' src='images/landing-page/white-shaka.png' />
              <span textAlign='center' style={textStyle} inverted as='h1' id='landing-text'>
                CAMINO <br/> LUMISIGHT </span>
          </Grid.Row>
          <Grid.Row>
            <SignInModal/>
          </Grid.Row>

          <Grid.Row>
            <SignUpModal/>
          </Grid.Row>
        </Grid>
        </div>
        </div>
    );
  }
}

export default withRouter(Landing);
