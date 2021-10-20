import React, { useState, useEffect } from 'react';import axios from "axios";
import BlogList from "./BlogList";
import { makeStyles } from "@mui/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
  },
  blogsContainer: {
    paddingTop: "2",
  },
  blogTitle: {
    fontWeight: 350,
    paddingBottom: "2",
  },
}));

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentUser, setCurrentUser] = useState(3);
  const [isEmployer, setIsEmployer] = useState(true);

  function getAllUserBlogs() {
    if (isEmployer === true) {
      axios
        .get(`http://localhost:3000/employer_blogs/${currentUser}`)
        .then((results) => {
          console.log("this is the results", results.data.fields);
          setBlogs(results.data.fields);
        });
    } else {
      axios
        .get(`http://localhost:3000/seeker_blogs/${currentUser}`)
        .then((results) => {
          setBlogs(results.data.fields);
        });
    }
  }

  useEffect(() => {
    getAllUserBlogs();
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Grid item md={3}>
      <Typography variant="h4">Selphie's Blogs</Typography>
      <BlogList currentUser={currentUser} isEmployer={isEmployer} blogs={blogs} />

      </Grid>
    </Container>
  );
}
