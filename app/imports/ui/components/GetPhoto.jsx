import React from 'react';
import AWS from 'aws-sdk';

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

const GetPhoto = () => {

    const imageKey = 'get the key from collections here';
    const params = {
        Bucket: S3_BUCKET,
        Key: imageKey,
    };

    const url = myBucket.getSignedUrl('getObject', params);
    console.log(url);
    return <img src={url} alt=""/>;
};

export default GetPhoto;
