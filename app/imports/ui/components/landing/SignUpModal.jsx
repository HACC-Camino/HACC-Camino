import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import SignUpForm from './SignUpForm';

const SignUpModal = () => {
  const [open, setOpen] = React.useState(false);

  return (
      <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button color='yellow'>Sign Up</Button>}
          closeIcon
      >
        <Modal.Content>
          <Header>Sign Up</Header>
        </Modal.Content>
        <SignUpForm/>
      </Modal>
  );
};

export default SignUpModal;
