const router = require('express').Router();
const pool = require('./pool');

router.route('/:email')
  .get(async (request, response) => {
<<<<<<< HEAD
    const email = request.params.email;
=======
    const user_email = request.params.email;
    const params = [user_email]

>>>>>>> 9eb3ac84e2edc69ae765b0af2b65e3b964d49fb1
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

    const params = [user_name, first_name, last_name, city, state];

    const result = await pool.query(
      'UPDATE employer_blogs \
       SET (user_name, first_name, last_name, city, state) \
        VALUES ($1, $2, $3, $4, $5}',
    params)

    try {
      response.status(201).send(result);
    } catch {
      console.error(error);
    }
  })

module.exports = router;