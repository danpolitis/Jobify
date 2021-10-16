const router = require("express").Router();
const pool = require("./pool");

router
  .route("/:id")
  .get(async (request, response) => {
    const id = request.params.id;

    const result = await pool.query(
      `SELECT * FROM employers
      WHERE id = ${id};`
    );
    try {
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  })

  .post(async (request, response) => {
    const company_name = request.params.company_name;
    const city = request.params.city;
    const state = request.params.state;

    const result = await pool.query(
      `INSERT INTO employers (company_name, city, state)
         VALUES (${company_name}, ${city}, ${state});`
    );
    try {
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  })
  .put(async (request, response) => {
    const company_name = request.params.company_name;
    const city = request.params.city;
    const state = request.params.state;

    const result = await pool.query(
      `INSERT INTO employers (company_name, city, state)
         VALUES (${company_name}, ${city}, ${state})
         WHERE id = ${id};`
    );
    try {
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
