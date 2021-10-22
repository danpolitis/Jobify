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
import Typography from "@mui/material/Typography";
import { ListItem, ListItemText, List, Divider } from "@mui/material";
import Box from "@mui/material/Box";

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

  return (
    <Card sx={{ backgroundColor: "#efefef" }}>
      <Typography variant="h4">{props.post.title}</Typography>
      <CardContent>
        <List>{props.post.body}</List>
      </CardContent>
      <Box sx={{ fontWeight: "bold", fontSize: 16, display: "flex-end" }}>
        {`Created on: ${stringd}`}
      </Box>
    </Card>
  );
}
