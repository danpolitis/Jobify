const router = require('express').Router();
const pool = require('./pool');

router.route('/:poster_id')
  .get(async (request, response) => {
    const poster_id = request.params.pos
    const params = [poster_id];
    const result = await pool.query(
      'SELECT * FROM seekers_notes WHERE poster_id = $1', params
    )
    try {
      response.status(200).send(result.rows.sort((a, b) => {
        return Number(a.id) - Number(b.id)
      }));
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
      'INSERT INTO seekers_notes(poster_id, title, body, created) \
       VALUES ($1, $2, $3, $4);',
       params
    )

    try {
      console.log(result)
      response.status(201).send(result);
    } catch (error) {
      console.error(error);
    }
  })

router.route('/:id')
  .put(async (request, response) => {
    const id = request.params.id;
    const title = request.body.title;
    const body = request.body.body;

    const params = [id, body]

    const result = pool.query(
      'UPDATE seekers_notes \
      SET body = $2, \
      WHERE id = $1',
      params
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
      `DELETE FROM seekers_notes
       WHERE id = ${id};`
    )
    try {
      response.status(202).send(result);
    } catch (error) {
      console.error(error);
    }
  })

module.exports = router;