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
  blogsContainer: {
    paddingTop: "2",
  },
  blogTitle: {
    fontWeight: 350,
    paddingBottom: "2",
  },
}));

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(1);
  const [isEmployer, setIsEmployer] = useState(true);

  function getAllUserBlogs() {
    if (isEmployer === true) {
      axios
        .get(`http://localhost:3000/employer_blogs/${currentUser}`)
        .then((results) => {
          // console.log("this is the results", results.data.rows);
          setPosts(results.data.rows);
        });
    } else {
      axios
        .get(`http://localhost:3000/seeker_blogs/${currentUser}`)
        .then((results) => {
          setPosts(results.data.rows);
        });
    }
  }

  useEffect(() => {
    getAllUserBlogs();
  }, [posts]);

  const classes = useStyles();
  return (
    <Container maxWidth="lg" direction="column" className={classes.blogsContainer} >
      <Grid item >
      <Typography variant="h4">Selphie's Blogs</Typography>
      <BlogList currentUser={currentUser} isEmployer={isEmployer} posts={posts} getAllUserBlogs={getAllUserBlogs}/>
      </Grid>
    </Container>
  );
}
