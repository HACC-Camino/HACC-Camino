import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Form, Message, Segment } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', email2: '', password: '', password2: '', error: '', hasSignedUp: false };
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  submit = () => {
    const { email, password } = this.state;
      Accounts.createUser({ email, username: email, password }, (err) => {
        if (err) {
          this.setState({ error: err.reason });
        } else {
          this.setState({ error: '', hasSignedUp: true });
        }
      });
  }

  render() {
    if (this.state.hasSignedUp) {
      return <Redirect to={'/home'}/>;
    }
    return (
        <div>
          <Segment>
            <Form onSubmit={this.submit}>
              <Segment stacked>
                <Form.Input
                    id="user"
                    label="Email"
                    icon="user"
                    iconPosition="left"
                    name="email"
                    type="email"
                    placeholder="E-mail address"
                    onChange={this.handleChange}
                />
                <Form.Input
                    id="confirm_user"
                    label="Confirm E-mail address"
                    icon="user"
                    iconPosition="left"
                    name="email"
                    type="email"
                    placeholder="Confirm E-mail address"
                    onChange={this.handleChange}
                />
                <Form.Input
                    id="password"
                    label="Password"
                    icon="lock"
                    iconPosition="left"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={this.handleChange}
                />
                <Form.Input
                    id="confirm_password"
                    label="Confirm Password"
                    icon="lock"
                    iconPosition="left"
                    name="password"
                    placeholder="Confirm Password"
                    type="password"
                    onChange={this.handleChange}
                />
                <Form.Button content="Submit"/>
              </Segment>
            </Form>
            <Message>
              Already have an account? Login <Link to="/signin">here</Link>
            </Message>
            {this.state.error === '' ? (
                ''
            ) : (
                <Message
                    error
                    header="Registration was not successful"
                    content={this.state.error}
                />
            )}
          </Segment>
        </div>
    );
  }
}

export default SignUpForm;
