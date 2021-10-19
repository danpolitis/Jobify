const router = require('express').Router();
const pool = require('./pool');

//WIP

router.route('/:user_id')
  .get(async (request, response) => {
    const user_id = request.params.user_id;
    const result = await pool.query(
      `SELECT * FROM documents WHERE user_id = ${user_id}`
    )
    try {
      response.status(200).send(result);
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