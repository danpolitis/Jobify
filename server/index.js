const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const { applications, blogs, documents, employers, notes, seekers } = require('./routes/index');

app.use(express.static(path.join(__dirname, '..client/dist')));
app.use(express.json());
app.use('/applications', applications);
app.use('/blogs', blogs);
app.use('/documents', documents);
app.use('/employers', employers);
app.use('/notes', notes);
app.use('/seekers', seekers);

app.listen(port, () => {
  console.log(`connected to port: ${port}`);
})

module.exports = app;