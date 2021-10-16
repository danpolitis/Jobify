const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const { applications, employer_blogs, employer_notes, documents, employers, seeker_blogs, seeker_notes, seekers } = require('./routes/index');

app.use(express.static(path.join(__dirname, '..client/dist')));
app.use(express.json());
app.use('/applications', applications);
app.use('/documents', documents);
app.use('/employers', employers);
app.use('/employer_blogs', employer_blogs);
app.use('/employer_notes', employer_notes);
app.use('/seekers', seekers);
app.use('/seeker_blogs', seeker_blogs);
app.use('/seeker_notes', seeker_notes);

app.listen(port, () => {
  console.log(`connected to port: ${port}`);
})

module.exports = app;