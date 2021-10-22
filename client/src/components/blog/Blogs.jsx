import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
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

import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";
import { GlobalContext } from "../App";

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: "2",
  },
  blogTitle: {
    fontWeight: 350,
    paddingBottom: "2",
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

export default function Blogs() {
  const globalState = useContext(GlobalContext);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(globalState.state.userId);
  const [isEmployer, setIsEmployer] = useState(globalState.state.role === 'employer');

  function getAllUserBlogs() {
    if (isEmployer === 'employer') {
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
  }, []);

  const classes = useStyles();
  return (
    <Container
    // container
      maxWidth="lg"
      alignItems="center"
      direction="column"
      spacing={0}
      justify="center"
      style={{ minHeight: 250 }}
      className={classes.blogsContainer}
    >
      <Grid className={classes.items}>
        <Typography variant="h4">{(isEmployer ? 'Company Blog' : 'Personal Blog')}</Typography>
        <Grid item md={12} xs={12} sm={10} xl={6}>
          <BlogList
            currentUser={currentUser}
            isEmployer={isEmployer}
            posts={posts}
            getAllUserBlogs={getAllUserBlogs}
          />
        </Grid>
      </Grid>
      <CreateBlog
        currentUser={currentUser}
        isEmployer={isEmployer}
        getAllUserBlogs={getAllUserBlogs}
      />
    </Container>
  );
}
