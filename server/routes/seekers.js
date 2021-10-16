const router = require('express').Router();
const pool = require('./pool');

router.route('/:email')
  .get(async (request, response) => {
    const user_email = request.params.email;
    const params = [user_email]

    const result = await pool.query(
      'SELECT * FROM seekers \
       WHERE email = $1',
    params)

    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })
  .post(async (request, response) => {
    const user_name = request.body.user_name;
    const first_name = request.body.first_name;
    const last_name= request.body.last_name;
    const city = request.body.city;
    const state = request.body.state;
    const email = request.params.email;

    const params = [user_name, first_name, last_name, city, state, email]

    const result = await pool.query(
      'INSERT INTO seekers (user_name, first_name, last_name, city, state, email)\
      VALUES ($1, $2, $3, $4, $5, $6)\
      ',
    params)

    try {
      response.status(201).send(result);
    } catch {
      console.error(error);
    }
  })
  .put(async (request, response) => {
    const user_name = request.body.user_name;
    const first_name = request.body.first_name;
    const last_name = request.body.last_name;
    const city = request.body.city;
    const state = request.body.state;
    const id = request.params.id;

    const params = [user_name, first_name, last_name, city, state, id];

    const result = await pool.query(
      'UPDATE seekers \
      SET user_name = $1, \
           first_name = $2, \
           last_name = $3, \
           city = $4, \
           state = $5 \
      WHERE id = $6', params)

    try {
      response.status(201).send(result);
    } catch {
      console.error(error);
    }
  })

module.exports = router;