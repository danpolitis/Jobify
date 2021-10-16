const router = require('express').Router();
const pool = require('./pool');

router.route('/:email')
  .get(async (request, response) => {
    console.log('request: ', request);
    const email = request.params.email;
    const result = await pool.query(
      `SELECT * FROM seekers
       WHERE email = ${email};`
    )
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })
  .post(async (request, response) => {
    const username = request.body.username;
    const first_name = request.body.first_name;
    const last_name= request.body.last_name;
    const city = request.body.city;
    const state = reqeust.body.state;
    const email = request.params.email;

    const result = await pool.query(
      `INSERT INTO seekers (username, first_name, last_name, city, state, email)\
      VALUES (${username}, ${first_name}, ${last_name}, ${city}, ${state}, ${email})\
      `
    )
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })
  .put(async (request, response) => {
    const username = request.body.username;
    const first_name = request.body.first_name;
    const last_name = request.body.last_name;
    const city = request.body.city;
    const state = request.body.state;

    const result = await pool.query(
      `UPDATE employer_blogs
       SET (username, first_name, last_name, city, state)
        VALUES (${username}, ${first_name}, ${last_name}, ${city}, ${state})
        WHERE email = ${email}`
    )
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })

module.exports = router;