import React from 'react';

const { S3 } = require('@aws-sdk/client-s3');
const aws = require('aws-sdk');

const config = {
    REACT_APP_ACCESS_ID: '',
    REACT_APP_ACCESS_KEY: '',
    REACT_APP_BUCKET_NAME: 'testbucketlumicamino',
    REACT_APP_REGION: 'us-east-1',
};

// const s3 = new S3({
//     region: config.REACT_APP_REGION,
//     secretAcessKey: config.REACT_APP_ACCESS_KEY,
//     accessKeyId: config.REACT_APP_ACCESS_ID,
// });

aws.config.update({
    secretAcessKey: '',
    accessKeyId: '',
    region: config.REACT_APP_REGION,
});

const s3 = new aws.S3();

class UploadCard extends React.Component {

    uploadfun(e) {
        console.log(e.target.files[0]);
        console.log(e.target.name);
        console.log(e.target.files[0].name);
        s3.putObject({
            Bucket: config.REACT_APP_BUCKET_NAME,
            Key: e.target.files[0].name,
            Body: e.target.files[0],
            ACL: 'public-read',
        }, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('sucess');
            }
        });
    }

    render() {
        return (
            <div>
                <h3>hello</h3>
                <input type='file' onChange={this.uploadfun} />
            </div>
        );
    }
}

export default UploadCard;
