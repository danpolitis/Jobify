const router = require('express').Router();
const path = require('path');
const { createWriteStream } = require('fs');
const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  keyFilename: path.join(__dirname, '../../keen-opus-329616-274b8884dd65.json')
})

router.route('/:user_id')
  .get(async (request, response) => {
    console.log('in get request')
    const user_id = request.params.user_id;
    const bucketName = 'hghaskjsdlkja3';
    const bucket = storage.bucket(bucketName);

    bucket.getFiles().then(function(data) {
      const files = data[0];
      try {
        response.status(200).send(files);
      } catch (error) {
        console.error(error);
      }
    })
  })

  .post(async (request, response) => {
    console.log('in post');
    console.log(request.files);
    const user_id = request.params.user_id;
    const file = request.files.file;
    const fileName = file.name;
    const bucketName = 'hghaskjsdlkja3';

    // createBucket = async() => {
    //   // Creates the new bucket
    //   await storage.createBucket(bucketName);
    //   console.log(`Bucket ${bucketName} created.`);
    // }
    // createBucket().then(() => {
    //   const testB = storage.bucket(bucketName);
    //   const options = {
    //     destination: fileName,
    //     resumable: false,
    //     contentType: 'auto'
    //   }

    //   testB.upload(file.tempFilePath, options, function(err, file) {
    //     if (err) {
    //       console.log('error uploading: ', err);
    //     } else {
    //       console.log('file uploaded?');
    //     }
    //   })
    // })

    const testB = storage.bucket(bucketName);
    const options = {
      destination: fileName,
      resumable: false,
      contentType: 'auto'
    }

    testB.upload(file.tempFilePath, options, function(err, file) {
      if (err) {
        console.log('error uploading: ', err);
      } else {
        console.log('file uploaded?');
      }
    })

    try {
      response.status(200).send('Uploaded');
    } catch (error) {
      console.error(error);
    }
  })


module.exports = router;