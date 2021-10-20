const router = require('express').Router();
const pool = require('./pool');
const path = require('path');
const { createWriteStream } = require('fs');
const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  keyFilename: path.join(__dirname, '../../keen-opus-329616-274b8884dd65.json')
})

router.route('/:user_id')
  .get(async (request, response) => {
    const user_id = request.params.user_id;

    try {
      fsDataToFile('test.pages', result.rows[0].encode);
      response.status(200).end();
    } catch (error) {
      console.error(error);
    }
  })

  .post(async (request, response) => {
    const user_id = request.params.user_id;
    const file = request.body.file;
    const bucketName = 'cool-docs';

    // async function createBucket() {
    //   await storage.createBucket(bucketName);
    //   console.log(`Bucket ${bucketName} created.`);
    // }
    // createBucket().catch(console.error);

    const bucket = storage.bucket(bucketName);
    const options = {
      resumable: false,
      contentType: 'auto'
    }

    bucket.upload(file, options, function(err, file) {
      if (err) {
        console.log('error uploading: ', err);
      } else {
        console.log('file uploaded?');
      }
    })


    try {
      response.status(200).end();
    } catch (error) {
      console.error(error);
    }
  })


module.exports = router;