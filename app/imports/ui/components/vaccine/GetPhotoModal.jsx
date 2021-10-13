import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import GetPhoto from './GetPhoto';

const GetPhotoModal = (vaccineData) => {
    const [open, setOpen] = React.useState(false);
    // console.log(vaccineData.vaccineData);
    return (
        <div className='get-photo-modal'>
            <Modal
                size={'mini'}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button className='ui form button'>View Vaccination Card</Button>}
                closeIcon>
              <Modal.Header>Your Vaccine Card</Modal.Header>
                <Modal.Content scrolling>
                    <GetPhoto vaccineData={vaccineData.vaccineData}/>
                </Modal.Content>
            </Modal>
        </div>
    );
};

GetPhotoModal.prototype = {
    vaccineData: PropTypes.array.isRequired,
};

export default GetPhotoModal;
