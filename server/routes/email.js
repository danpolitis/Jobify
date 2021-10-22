const router = require("express").Router();
const nodemailer = require('nodemailer');

router.route('/')
  .post(async (request, response) => {

    console.log(request.body)

    let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'JobifyCentral@gmail.com',
        pass: 'jobify123!'
      }
    })

    let mailDetails = {
      from: 'JobifyCentral@gmail.com',
      to: 'danpolitis@gmail.com',
      subject: request.body.subject,
      text: request.body.message
    };
    const sendMail = () => {
      mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            res.status(404).send(err)
        } else {
            res.status(201).send("Email Sent")
        }
      });
    }

    sendMail()
  })

module.exports = router;