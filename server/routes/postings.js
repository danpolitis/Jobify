const router = require("express").Router();
const pool = require("./pool");

router.route("/all")
  .get(async (request, response) => {
    const result = await pool.query("SELECT * FROM postings;");
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  });

router.route("/employer/:employer_id")
  .get(async (request, response) => {
    const params = [request.params.employer_id];
    const result = await pool.query(
      `SELECT * FROM postings WHERE employer_id = $1;`, params
    );
    try {
      response.status(200).send(result.rows);
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
      `INSERT INTO postings (field, salary, employer_id, description, posted_date, status, title, benefits, requirements, city)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`,
      params
    );
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  });

router.route("/keyword/:keyword")
  .get(async (request, response) => {
    const params = [request.params.keyword];
    const result = await pool.query(
      `SELECT * FROM postings
        WHERE lower(field) LIKE LOWER('%' || $1 || '%')
          OR lower(description) LIKE LOWER('%' || $1 || '%')
          OR lower(title) LIKE LOWER('%' || $1 || '%')
          OR lower(benefits) LIKE LOWER('%' || $1 || '%')
          OR lower(requirements) LIKE LOWER('%' || $1 || '%');`,
      params
    )
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  });

router.route("/city/:city")
  .get(async (request, response) => {
    const params = [request.params.city];
    const result = await pool.query(
      `SELECT * FROM postings WHERE lower(city) LIKE LOWER('%' || $1 || '%');`,
      params
    );
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  });

router.route("/posting_id/:id")
  .get(async (request, response) => {
    const params = [request.params.id];
    const result = await pool.query(`SELECT * FROM postings WHERE id = $1;`,
      params
    );
    try {
      response.status(200).send(result.rows);
    } catch (error) {
      console.error(error);
    }
  })
  .put(async (request, response) => {
    const params = [request.params.id];
    const result = await pool.query(
      `UPDATE postings
        SET status = NOT status
        WHERE id = $1;`,
      params
    );
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  });

module.exports = router;