const router = require("express").Router();
const pool = require("./pool");

router.route("/all").get(async (request, response) => {
  const result = await pool.query("SELECT * FROM postings;");
  try {
    response.status(200).send(result);
  } catch (error) {
    console.error(error);
  }
});

router
  .route("/employer/:employer_id")
  .get(async (request, response) => {
    const employer_id = request.params.employer_id;
    const result = await pool.query(
      `SELECT * FROM postings WHERE employer_id = ${employer_id};`
    );
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })

  .post(async (request, response) => {
    const date = new Date();
    const status = true;
    const params = [
      request.body.field,
      request.body.salary,
      request.params.employer_id,
      request.body.description,
      date,
      status,
      request.body.title,
      request.body.benefits,
      request.body.requirements,
      request.body.city,
    ];
    const result = await pool.query(
      "INSERT INTO postings (field, salary, employer_id, description, posted_date, status, title, benefits ,requirements, city) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);",
      params
    );
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  });

router.route("/city/:city").get(async (request, response) => {
  const params = [request.params.city];
  const result = await pool.query(
    "SELECT * FROM postings WHERE city = $1;",
    params
  );

  try {
    response.status(200).send(result);
  } catch (error) {
    console.error(error);
  }
});

router.route("/posting_id/:id").put(async (request, response) => {
  const id = request.params.id;
  const result = await pool.query(
    `UPDATE postings
       SET status = NOT status
       WHERE id = ${id};`
  );

  try {
    response.status(200).send(result);
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
