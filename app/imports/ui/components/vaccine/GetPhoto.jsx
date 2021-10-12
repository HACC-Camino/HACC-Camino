import React from 'react';
import AWS from 'aws-sdk';
import PropTypes from 'prop-types';

AWS.config.update({
    accessKeyId: '',
    secretAccessKey: '',
});

const S3_BUCKET = 'lumi-camino-main';
const REGION = 'us-west-1';
const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
});

const GetPhoto = ({ vaccineData }) => {
    let imageKey;
    if (vaccineData[0] === undefined) {
        imageKey = null;
    } else {
        imageKey = vaccineData[0].awsKey;
    }

    function isThereAPhoto(key) {
        if (!key) {
            return null;
        }
        const params = {
            Bucket: S3_BUCKET,
            Key: key,
        };
        return myBucket.getSignedUrl('getObject', params);
    }

    const something = isThereAPhoto(imageKey);
    if (something !== null) {
        return <img src={something} alt=""/>;
    }
    return <img src={'images/no_image_found.jpg'} alt=""/>;
};

GetPhoto.propTypes = {
    vaccineData: PropTypes.array.isRequired,
};

export default GetPhoto;
