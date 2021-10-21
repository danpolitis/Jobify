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

router.route("/search")
  .get(async (request, response) => {
    const { keyword, city } = request.query;

    const keywordSearchClause = `(
      lower(field) LIKE LOWER('%${keyword}%')
        OR lower(description) LIKE LOWER('%${keyword}%')
        OR lower(title) LIKE LOWER('%${keyword}%')
        OR lower(benefits) LIKE LOWER('%${keyword}%')
        OR lower(requirements) LIKE LOWER('%${keyword}%')
    )`;
    const citySearchClause = `
      lower(city) LIKE LOWER('%${city}%')
    `;
    const search =
      keyword.length > 0 && city.length === 0
      ? `SELECT * FROM postings WHERE ${keywordSearchClause};`
      : keyword.length === 0 && city.length > 0
      ? `SELECT * FROM postings WHERE ${citySearchClause};`
      : `SELECT * FROM postings WHERE ${keywordSearchClause} AND ${citySearchClause};`;

    const result = await pool.query(search);
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