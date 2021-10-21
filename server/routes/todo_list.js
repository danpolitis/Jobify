const router = require("express").Router();
const pool = require("./pool");

router.route('/:uuid')
  .get(async (request, response) => {
    const params = [request.params.uuid];
    const result = await pool.query(
      'SELECT * FROM todo_list WHERE uuid = $1', params
    )
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })

  .post(async (request, response) => {
    const uuid = request.params.uuid;
    const time = request.body.time;
    const eventActivity = request.body.eventActivity;
    const date = request.body.date;
    const params = [uuid, time, eventActivity, date];
    const result = await pool.query(
      'INSERT INTO todo_list(uuid, time, eventActivity, date) \
      VALUES($1, $2, $3, $4);', params
    )
  })

module.exports = router;