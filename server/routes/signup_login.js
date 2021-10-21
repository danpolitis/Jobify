const router = require('express').Router();
const pool = require('./pool');

router.route('/')
  .get(async (request, response) => {
    // console.log(request.body.uuid);
    //should we use param? no sure how to send a get request body with axios
    const uuid = request.body.uuid;
    const result = await pool.query(
      `SELECT role FROM uuids WHERE uuid = ${uuid}`
    )
    if (result.rows[0] === false) {
      const secondResult = await pool.query(
        `SELECT * FROM seekers WHERE uuid = ${uuid}`
      )
      try {
        response.status(200).send(secondResult);
      } catch (error) {
        console.error(error);
      }
    } else {
      const secondResult = await pool.query(
        `SELECT * FROM employers WHERE uuid = ${uuid}`
      )
      try {
        response.status(200).send(secondResult);
      } catch (error) {
        console.error(error);
      }
    }
  })

  .post(async (request, response) => {
    // console.log(request.body.uuid);
    // console.log(request.body.isSeeker);
    const uuid = request.body.uuid;
    let role;
    if(request.body.isSeeker === 'seeker') {
      role = false;
    } else {
      role = true;
    }
    // console.log(role);
    const result = await pool.query(
      `INSERT INTO uuid(uuid, role) VALUES (${uuid}, ${role});`
    )
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })
module.exports = router;