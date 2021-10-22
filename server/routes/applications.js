const router = require("express").Router();
const pool = require("./pool");

router.route("/applicant/:applicant_id").get(async (request, response) => {
  const applicantId = request.params.applicant_id;
  const params = [applicantId];
  const result = await pool.query(
    "SELECT * FROM applications WHERE applicant_id = $1",
    params
  );
  try {
    response.status(200).send(result);
  } catch (error) {
    console.error(error);
  }
});

router
  .route("/employer/:posting_id")
  .get(async (request, response) => {
    const postingId = request.params.posting_id;
    const result = await pool.query(
      `SELECT * FROM applications WHERE posting_id = ${postingId}`
    );
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })

  .post(async (request, response) => {
    const applicant_id = request.body.applicant_id;
    const resume = request.body.resume;
    const cover_letter = request.body.cover_letter;
    const years_exp = request.body.years_exp;
    const years_edu = request.body.years_edu;
    const status = true;
    const favorited = false;
    const posting_id = request.params.posting_id;
    const name = request.body.name;
    const email = request.body.email;
    const params = [
      applicant_id,
      resume,
      cover_letter,
      years_exp,
      years_edu,
      status,
      favorited,
      posting_id,
      name,
      email,
    ];

    const result = await pool.query(
      "INSERT INTO applications(applicant_id, resume, cover_letter, years_exp, years_edu, status, favorited, posting_id, name, email) \
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
      params
    );

    try {
      response.status(201).send(result);
    } catch (error) {
      console.error(error);
    }
  });

router
  .route("/:posting_id/:applicant_id/favorited")
  .put(async (request, response) => {
    const applicant_id = request.params.applicant_id;
    const posting_id = request.params.posting_id;

    const result = await pool.query(
      `UPDATE applications
       SET favorited = NOT favorited
       WHERE posting_id = ${posting_id} AND
       applicant_id = ${applicant_id};`
    );

    try {
      response.status(202).send(result);
    } catch (error) {
      console.error(error);
    }
  });

router.route("/delete/:application_id").delete(async (request, response) => {
  const params = [request.params.application_id];
  const result = await pool.query(
    "DELETE FROM applications WHERE id = $1",
    params
  );
  try {
    response.status(202).send(result);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
