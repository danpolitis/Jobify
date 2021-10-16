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
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })

  .post(async (request, response) => {
    const poster_id = request.params.poster_id;
    const title = request.body.title;
    const body = request.body.body;
    const created = Date.now();

    const result = pool.query(
      `INSERT INTO employers_notes(poster_id, title, body, created)
       VALUES (${poster_id}, ${title}, ${body}, ${created});`
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

    const result = pool.query(
      `UPDATE employers_notes
       SET (title, body)
        VALUES (${title}, ${body})
        WHERE id = ${id}`
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