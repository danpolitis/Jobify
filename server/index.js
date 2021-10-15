const express = require('express');
const path = require('path');
//const {} = require('./routes/index.js);

const app = express();

const port = 3000;
app.use(express.static(path.join(__dirname, '..client/dist')));
app.use(express.json());

app.listen(port, () => {
  console.log(`connected to port: ${port}`);
})

module.exports = app;