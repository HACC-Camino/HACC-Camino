import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import GetPhoto from './GetPhoto';

const GetPhotoModal = (vaccineData) => {
    const [open, setOpen] = React.useState(false);
    // console.log(vaccineData.vaccineData);
    return (
        <div className='get-photo-modal'>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button className='ui form button'>View Vaccination Card</Button>}
                closeIcon>
                <Modal.Content scrolling image>
                    <Header>Your Vaccine Card</Header>
                </Modal.Content>
                <GetPhoto vaccineData={vaccineData.vaccineData}/>
            </Modal>
        </div>
    );
};

GetPhotoModal.prototype = {
    vaccineData: PropTypes.array.isRequired,
};

export default GetPhotoModal;
