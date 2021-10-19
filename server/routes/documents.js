const router = require('express').Router();
const pool = require('./pool');
const fs = require('fs');

//WIP
function fsDataToFile(base64String, fileName) {
  fs.writeFile('test', base64String, {encoding: 'base64'}, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('file created');
    }
  })
}

// function dataURLtoFile(dataurl, filename) {

//   var arr = dataurl.split(','),
//       mime = arr[0].match(/:(.*?);/)[1],
//       bstr = atob(arr[1]),
//       n = bstr.length,
//       u8arr = new Uint8Array(n);

//   while(n--){
//       u8arr[n] = bstr.charCodeAt(n);
//   }

//   return new File([u8arr], filename, {type:mime});
// }

router.route('/:user_id')
  .get(async (request, response) => {
    const user_id = request.params.user_id;
    const params = ['base64', user_id, '']
    const result = await pool.query(
      "SELECT document_name, translate(encode(document_body, $1), E'\n', $3) FROM documents WHERE user_id = $2;", params
    )
    //const returnResult = dataURLtoFile(result.rows[0].encode, result.rows[0].document_name)
    try {
      fsDataToFile('test.pages', result.rows[0].encode);
      response.status(200).send(result.rows[0].document_name);
    } catch (error) {
      console.error(error);
    }
  })

  .post(async (request, response) => {
    const user_id = request.params.user_id;
    const params = [user_id, 'test', request.body.file.split(',')[1], 'base64'];
    //insert via https://stackoverflow.com/questions/39573219/can-i-store-a-word-document-in-a-postgresql-database
    const result = await pool.query(
      'INSERT INTO documents(user_id, document_name, document_body) \
      VALUES($1, $2, decode($3, $4)::bytea)', params
    )
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })


module.exports = router;