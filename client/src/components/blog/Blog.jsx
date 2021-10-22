import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { ListItem, ListItemText, List, Divider } from "@mui/material";
import axios from "axios";

export default function Blog(props) {
  const date = new Date(props.post.created);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const stringd =
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

  function handleListClick(event, index, post) {
    props.setSelectedIndex(index);
    props.setPosts(post);
  }

  function handleDeletePost(e) {
    if (props.isEmployer === true) {
      axios
        .delete(`http://localhost:3000/employer_blogs/${props.post.id}`)
        .then(() => {
          props.getAllUserBlogs();
        });
    } else {
      axios
        .delete(`http://localhost:3000/seeker_blogs/${props.post.id}`)
        .then(() => {
          props.getAllUserBlogs();
        });
    }
  }

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <IconButton
          onClick={handleDeletePost}
          style={{ textAlign: "right", width: "48px" }}
          xs={2}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Typography variant="h4">{props.post.title}</Typography>
      <CardContent>
        <List>
          <React.Fragment>
            {/* <Typography sx={{display:'inline'}} component="span" variant="body2" color="text.secondary" noWrap="true"> */}
            {props.post.body}
            {/* </Typography> */}
          </React.Fragment>
        </List>
      </CardContent>
      <Grid
        container
        direction="flex-end"
        justifyContent="flex-end"
        alignItems="center"
      >
        {`Created on: ${stringd}`}
      </Grid>
    </div>
  );
}
