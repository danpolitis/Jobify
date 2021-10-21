const router = require("express").Router();
const pool = require("./pool");

router.route('/')
  .get(async (request, response) => {
    const uuid = request.body.uuid;

    const result = await pool.query(
      `SELECT * FROM todo_list WHERE uuid = ${uuid};`
    )
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })

  .post(async (request, response) => {
    const uuid = request.body.uuid;
    const time = request.body.time;
    const eventActivity = request.body.eventActivity;
    const result = await pool.query(
      `INSERT INTO todo_list(uuid, time, eventActivity)
       VALUES(${uuid}, ${time}, ${eventActivity});`
    )
  })

module.exports = router;