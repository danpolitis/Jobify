import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import Blog from "./Blog";

export default function BlogList(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Stack
      direction="column"
      justifyContent="space-around"
      spacing={2}
      paddingTop="10"
    >
      {props.posts.map((post, i) => {
        return (
          <Blog
            setSelectedIndex={setSelectedIndex}
            selectedIndex={selectedIndex}
            setPosts={props.setPosts}
            getAllUserBlogs={props.getAllUserBlogs}
            isEmployer={props.isEmployer}
            index={i}
            key={i}
            post={post}
          />
        );
      })}
    </Stack>
  );
}
