const router = require('express').Router();
const pool = require('./pool');

router.route('/:poster_id')
  .get(async (request, response) => {
    const poster_id = request.params.poster_id;
    const result = await pool.query(
      `SELECT * FROM seeker_notes
       WHERE poster_id = ${poster_id};`
    )
    try {
      response.status(200).send(result);
    } catch {
      console.error(error);
    }
  })

  .post(async (request, response) => {
    const poster_id = request.params.poster_id;
    const title = request.body.title;
    const body = request.body.body;
    const created = new Date();

    const params = [poster_id, title, body, created]

    const result = pool.query(
      'INSERT INTO seeker_notes(poster_id, title, body, created) \
       VALUES ($1, $2, $3, $4);'
    )

    try {
      response.status(201).send(result);
    } catch (error) {
      console.error(error);
    }
  })

router.route('/id/:id')
  .put(async (request, reponse) => {
    const id = request.params.id;
    const title = request.body.title;
    const body = request.body.body;

    const params = [id, title, body]

    const result = pool.query(
      'UPDATE seeker_notes \
      SET title = $2, \
           body = $3 \
      WHERE id = $1'
    )
    try {
      response.status(201).send(result);
    } catch (error) {
      console.error(error);
    }
  })

  .delete(async (request, response) => {
    const id = request.params.id;
    const result = pool.query(
      `DELETE FROM seeker_notes
       WHERE id = ${id};`
    )
    try {
      response.status(202).send(result);
    } catch (error) {
      console.error(error);
    }
  })

module.exports = router;