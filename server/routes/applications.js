const router = require('express').Router();
const pool = require('./pool');

router.route('/:applicant_id')
  .get(async (request, response) => {
    const applicantId = request.params.applicant_id;
    const result = await pool.query(
      `SELECT * FROM applications WHERE applicant_id = ${applicantId}`
    )
    try {
      response.status(200).send(result);
    } catch {
      console.error(error);
    }
  })

router.route('/:posting_id')
  .get(async (request, response) => {
    const postingId = request.params.posting_id;
    const result = await pool.query(
      `SELECT * FROM applications WHERE posting_id = ${postingId}`
    )
    try {
      response.status(200).send(result);
    } catch {
      console.error(error);
    }
  })

  .post(async (request, response) => {
    const applicant_id = request.body.applicant_id;
    const application_body = request.body.application_body;
    const favorited = false;
    const posting_id = request.params.posting_id;

    const result = await pool.query(
      `INSERT INTO applications(applicant_id, application_body, favorited, posting_id)
       VALUES (${applicant_id}, ${application_body}, ${favorited}, ${posting_id})`
    )

    try {
      response.status(201).send(result);
    } catch {
      console.error(error);
    }
  })

router.route('/:posting_id/:applicant_id/favorited')
  .put(async (request, response) => {
    const applicant_id = request.params.applicant_id;
    const posting_id = request.params.posting_id;

    const result = await pool.query(
      `UPDATE applications
       SET favorited = NOT favorited
       WHERE posting_id = ${posting_id} AND
       applicant_id = ${applicant_id};`
    )

    try {
      response.status(202).send(result);
    } catch {
      console.error(error);
    }
  })

module.exports = router;