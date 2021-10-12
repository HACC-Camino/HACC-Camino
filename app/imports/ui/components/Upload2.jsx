import React, { useState } from 'react';
import AWS from 'aws-sdk';

const S3_BUCKET = 'lumi-camino-main';
const REGION = 'us-west-1';

AWS.config.update({
    accessKeyId: '',
    secretAccessKey: '',
});

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
});

const Upload2 = () => {
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const uploadFile = (file) => {

        // the function below creates a new name for the image being uploaded.
        const makeId = (length) => {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        };
        // figures out what kind of file it is and appends to the randomly generated key.
        const filetype = file.name.split('.')[1];
        let filename = makeId(25);
        filename = `${filename}.${filetype}`;
        // console.log(filename);

        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: filename,
        };

        myBucket.putObject(params)
        .on('httpUploadProgress', (evt) => {
            setProgress(Math.round((evt.loaded / evt.total) * 100));
        })
        .send((err) => {
            // eslint-disable-next-line no-console
            if (err) console.log(err);
        });
    };

    return <div>
        <div>File upload progress = {progress}%</div>
        <input type='file' onChange={handleFileInput}/>
        <button onClick={() => uploadFile(selectedFile)}>
            Upload to S3
        </button>
    </div>;
};

export default Upload2;
