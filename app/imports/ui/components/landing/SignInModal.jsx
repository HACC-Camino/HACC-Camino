import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import SignInForm from './SignInForm';

const SignInModal = () => {
  const [open, setOpen] = React.useState(false);

  return (
      <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button>Sign In</Button>}
          closeIcon
      >
        <Modal.Content>
          <Header>Sign In</Header>
        </Modal.Content>
        <SignInForm/>
      </Modal>
  );
};

export default SignInModal;
