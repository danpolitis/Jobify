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
import { GlobalContext } from "../App";

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: "2",
  },
  blogTitle: {
    fontWeight: 350,
    paddingBottom: "2",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.redd.it/0c4jejunxhd51.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
}));

function Community(props) {
  const classes = useStyles();
  const globalState = useContext(GlobalContext);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(globalState.state.userId);
  const [isEmployer, setIsEmployer] = useState(
    globalState.state.role === "true"
  );

  function getAllBlogs() {
    if (isEmployer === "true") {
      axios
        .get(`http://localhost:3000/employer_blogs/all/${currentUser}`)
        .then((results) => {
          // console.log("this is the results", results.data.rows);
          setPosts(results.data.rows);
        });
    } else {
      axios
        .get(`http://localhost:3000/employer_blogs/all/${currentUser}`)
        .then((results) => {
          setPosts(results.data.rows);
        });
    }
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <Container
      // container
      maxWidth="lg"
      alignItems="center"
      direction="column"
      justify="center"
      style={{ minHeight: 250 }}
      className={classes.blogsContainer}
    >
      <Grid
        className={classes.items}
        container
        direction="column"
        justifyContent="center"
        alignitems="center"
      >
        <Box className={classes.hero}>
          <Box>Community Blog</Box>
        </Box>
        <Grid item md={12} xs={12} sm={10} xl={6}>
          <BlogList
            currentUser={currentUser}
            isEmployer={isEmployer}
            posts={posts}
            getAllUserBlogs={getAllBlogs}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Community;
