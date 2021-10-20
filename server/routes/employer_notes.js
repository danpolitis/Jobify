const router = require('express').Router();
const pool = require('./pool');

router.route('/:poster_id')
  .get(async (request, response) => {
    const poster_id = request.params.poster_id;
    const result = await pool.query(
      `SELECT * FROM employers_notes
       WHERE poster_id = ${poster_id};`
    )

    try {
      response.status(200).send(result.rows.sort((a, b) => {
        return Number(a.id) - Number(b.id)
      }));
    } catch (error) {
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
      'INSERT INTO employers_notes(poster_id, title, body, created) \
       VALUES($1, $2, $3, $4);',
       params)

    try {
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
    const params = [id, body];

    console.log(params);

    const result = pool.query(
      'UPDATE employers_notes \
      SET body = $2 \
      WHERE id = $1',
      params)
    try {
      response.status(201).send(result);
    } catch (error) {
      console.error(error);
    }
  })

  .delete(async (request, response) => {
    const id = request.params.id;
    console.log(id);
    const result = pool.query(
      `DELETE FROM employers_notes
       WHERE id = ${id};`
    )
    try {
      response.status(202).send(result);
    } catch (error) {
      console.error(error);
    }
  })

module.exports = router;