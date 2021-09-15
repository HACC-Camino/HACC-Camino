import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import SignInForm from './SignInForm';

const SignInModal = () => {
  const [open, setOpen] = React.useState(false);

  return (
      <div className='login-modal'>
      <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button size='large' color='yellow'>Sign In</Button>}
          closeIcon
      >
        <Modal.Content>
          <Header>Sign In</Header>
        </Modal.Content>
        <SignInForm/>
      </Modal>
      </div>
  );
};

export default SignInModal;
