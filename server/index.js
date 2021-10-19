const express = require("express");
const path = require("path");
const colors = require("colors");
const logo = require("./logo.js");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const {
  applications,
  employers_blogs,
  employers_notes,
  documents,
  employers,
  postings,
  seeker_blogs,
  seeker_notes,
  seekers,
} = require("./routes/index.js");

app.use(express.static(path.resolve(__dirname, "..client/build")));
app.use(express.urlencoded({ extended: false, limit: '25mb' }));
app.use(express.json({limit: '25mb'}));
app.use(cors());
app.use("/applications", applications);
app.use("/documents", documents);
app.use("/employers", employers);
app.use("/employer_blogs", employers_blogs);
app.use("/employer_notes", employers_notes);
app.use("/postings", postings);
app.use("/seekers", seekers);
app.use("/seeker_blogs", seeker_blogs);
app.use("/seeker_notes", seeker_notes);

app.get("/api", (req, res) => {
  res.json({ message: "👋 from Express!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(port, () => {
  console.log(
    `${logo.logo}
  Connected to port: ${port}`.brightCyan
  );
});

module.exports = app;
