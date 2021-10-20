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
    const params = [uuid, time, eventActivity];
    const result = await pool.query(
      'INSERT INTO todo_list(uuid, time, eventActivity) \
      VALUES($1, $2, $3);', params
    )
  })

module.exports = router;