import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Form, Message, Segment } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

export default class SignInForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', hasSignedIn: false };
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  submit = () => {
    const { email, password } = this.state;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', hasSignedIn: true });
      }
    });
    //  console.log('1');
  }

  render() {
    if (this.state.hasSignedIn) {
      return <Redirect to={'/home'}/>;
    }
    return (
        <div>
          <Segment>
              <Form onSubmit={this.submit}>
                <Segment stacked>
                  <Form.Input
                      label="Email"
                      icon="user"
                      iconPosition="left"
                      name="email"
                      type="email"
                      placeholder="E-mail address"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Password"
                      icon="lock"
                      iconPosition="left"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={this.handleChange}
                  />
                  <Form.Button content="Submit"/>
                </Segment>
              </Form>
              <Message>
                <Link to="/signup">Click here to Register</Link>
              </Message>
              {this.state.error === '' ? (
                  ''
              ) : (
                  <Message
                      error
                      header="Login was not successful"
                      content={this.state.error}
                  />
              )}
          </Segment>
        </div>
    );
  }
}
