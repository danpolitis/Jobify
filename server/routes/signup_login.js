const router = require('express').Router();
const pool = require('./pool');

router.route('/:uuid')
  .get(async (request, response) => {
    const uuid = request.params.uuid;
    const params = [uuid];
    const result = await pool.query(
      'SELECT role FROM uuids WHERE uuid = $1', params
    )
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })

  .post(async (request, response) => {
    // console.log(request.body.uuid);
    // console.log(request.body.role);
    const uuid = request.body.uuid;
    let role;
    if(request.body.isSeeker === false) {
      role = false;
    } else {
      role = true;
    }
    params = [uuid, role]
    // console.log(role);
    const result = await pool.query(
      'INSERT INTO uuids(uuid, role) VALUES ($1, $2);', params
    )
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })
module.exports = router;