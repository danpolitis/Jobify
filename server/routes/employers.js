const router = require("express").Router();
const pool = require("./pool");

router
  .route("/:id")
  .get(async (request, response) => {
    const id = request.params.id;
    const params = [id];

    const result = await pool.query(
      "SELECT * FROM employers\
      WHERE id = $1\
      ",
      params
    );
    try {
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  })

  .post(async (request, response) => {
    const company_name = request.body.company_name;
    const city = request.body.city;
    const state = request.body.state;

    const params = [company_name, city, state];

    const result = await pool.query(
      "INSERT INTO employers (company_name, city, state)\
         VALUES ($1, $2, $3)\
         ",
      params
    );
    try {
      response.status(201).send(result);
    } catch (error) {
      console.log(error);
    }
  })
  .put(async (request, response) => {
    const company_name = request.body.company_name;
    const city = request.body.city;
    const state = request.body.state;
    const id = request.params.id;

    const params = [company_name, city, state, id];

    const result = await pool.query(
      "UPDATE employers \
       SET company_name = $1, \
       city = $2, \
       state = $3 \
       WHERE id = $4",
      params);
    try {
      response.status(201).send(result);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
