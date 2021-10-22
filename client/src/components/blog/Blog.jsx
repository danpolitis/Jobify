import React, { useState } from "react";
import { ListItem, ListItemText, List, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
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
import axios from "axios";
import Box from "@mui/material/Box";


const useStyles = makeStyles((theme) => ({
  icon: {
    position: "relative",
    top: 10,
    left: 365,
  },
  blogTitle: {
    fontWeight: 350,
    paddingBottom: "2",
  },
  items: {
    paddingBottom: "100",
  },
}));

export default function Blog(props) {
  const date = new Date(props.post.created);
  const classes = useStyles();
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
    <Card sx={{ backgroundColor: "#FAF9F6" }} className={classes.items}>
      <IconButton
        onClick={handleDeletePost}
        size="medium"
        className={classes.icon}
      >
        <DeleteIcon />
      </IconButton>

      <Typography variant="h4">{props.post.title}</Typography>
      <CardContent>
        <List>{props.post.body}</List>
      </CardContent>
      <Box sx={{fontWeight: 'bold', fontSize: 16, display:"flex-end"}}>
        {`Created on: ${stringd}`}
      </Box>
    </Card>
  );
}
