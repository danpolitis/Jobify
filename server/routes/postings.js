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
      'SELECT * FROM postings WHERE employer_id = $1;', params
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
      request.body.type,
      request.body.exp_level,
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
      `INSERT INTO postings (
        field,
        type,
        exp_level,
        salary,
        employer_id,
        description,
        posted_date,
        status,
        title,
        benefits,
        requirements,
        city)
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
    const {
      keyword,
      city,
      wi_time,
      field,
      type,
      exp_level,
      min_salary,
    } = request.query;

    let search = `SELECT DISTINCT
      postings.id,
      title,
      employer_id,
      postings.city,
      salary,
      description,
      posted_date
        FROM postings, employers
        WHERE
    `;

    const clause = {
      keyword: `(
        lower(field) LIKE LOWER('%${keyword}%')
          OR lower(description) LIKE LOWER('%${keyword}%')
          OR lower(title) LIKE LOWER('%${keyword}%')
          OR lower(benefits) LIKE LOWER('%${keyword}%')
          OR lower(requirements) LIKE LOWER('%${keyword}%')
          OR lower(uuid) LIKE LOWER ('%${keyword}%')
          AND postings.employer_id ::int = employers.id
      )`,
      city: `lower(postings.city) LIKE LOWER('%${city}%')`,
      wi_time: `posted_date <= NOW() + INTERVAL '${wi_time}'`,
      field: `field = '${field}'`,
      type: `type = '${type}'`,
      exp_level: `exp_level = '${exp_level}'`,
      min_salary: `salary >= ${min_salary} AND salary < ${min_salary} + 20000`
    };

    Object.keys(request.query).map((column, i) => {
      search += ` ${clause[column]} AND`;
      if (i === Object.keys(request.query).length - 1) {
        search = search.slice(0, search.length - 4) + ';';
      }
    });

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
  })
  .delete(async (request, response) => {
    const params = [request.params.id];
    const firstResult = await pool.query(
      'DELETE FROM postings WHERE id = $1', params
    );
    const secondResult = await pool.query(
      'DELETE FROM applications WHERE posting_id = $1', params
    );
    try {
      response.status(202).send(result);
    } catch (error) {
      console.error(error);
    }
  })

module.exports = router;
