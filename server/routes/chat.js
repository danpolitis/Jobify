const router = require("express").Router();
const axios = require('axios');
const pool = require('./pool');
const { CHAT_API_KEY } = require('../../authkey.js')

router.route('/:uuid')
  .put(async (request, response) => {
    const uuid = request.params.uuid;
    const username = request.body.username;
    const first_name = request.body.first_name;
    const last_name = request.body.last_name;
    const password = request.body.password;
    const params = [username, first_name, last_name, password, uuid]

    const result = pool.query(
      'UPDATE uuids \
      SET username = $1, \
      first_name = $2, \
      last_name = $3, \
      password = $4 \
      WHERE uuid = $5',
      params
    )
    try {
      response.status(201).send(result);
    } catch (error) {
      console.error(error);
    }
  })
  .get(async (request, response) => {
    const uuid = request.params.uuid;
    const params = [uuid];
    const result = await pool.query(
      'SELECT * FROM uuids WHERE uuid = $1', params
    )
    try {
      response.status(200).send(result);
    } catch (error) {
      console.error(error);
    }
  })
  .post(async (request, response) => {
    let data = {
      "username": request.body.username,
      "secret": request.body.secret,
      "first_name": request.body.first_name,
      "last_name": request.body.last_name
    };
    console.log(CHAT_API_KEY)
    let config = {
      method: 'post',
      url: 'https://api.chatengine.io/users/',
      headers: {
        'PRIVATE-KEY': CHAT_API_KEY
      },
      data: data
    }

    axios(config)
      .then((results) => {
        response.status(201).send(JSON.stringify(results.data));
      })
      .catch((err) => {
        response.status(404).send(err)
        console.log(err)
      })
  })

module.exports = router;