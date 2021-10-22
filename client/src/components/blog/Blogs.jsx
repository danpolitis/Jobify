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
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";
import { GlobalContext } from "../App";
import theme from "../../Theme/ThemeFile.js";

const useStyles = makeStyles((theme) => ({
  blogTitle: {
    fontWeight: 350,
    paddingBottom: "2",
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.theminimalists.com/wp-content/uploads/2019/01/how-to-start-a-blog-in-2020-1.jpg')`,
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

export default function Blogs() {
  const globalState = useContext(GlobalContext);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(globalState.state.userId);
  const [isEmployer, setIsEmployer] = useState(
    globalState.state.role === "true"
  );

  function getAllUserBlogs() {
    if (isEmployer === "true") {
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
    <ThemeProvider theme={theme}>
      <Container
        // container
        paddingTop="20px"
        margin="20px"
        maxWidth="md"
        alignItems="center"
        direction="column"
        justify="center"
        style={{ minHeight: 400 }}
      >
        <Grid
          className={classes.items}
          container
          direction="column"
          justifyContent="center"
          alignitems="center"
        >
          <Box className={classes.hero}>
            <Box>{isEmployer ? "Company Blog" : "Personal Blog"}</Box>
          </Box>
          <Grid item md={10} xs={10} sm={10} xl={10} padding="20px">
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
    </ThemeProvider>
  );
}
