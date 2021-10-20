import React from "react";
import { Grid } from "@mui/material";
import PostList from "./PostList.jsx";
import PostDetails from "./PostDetails.jsx";

function Postings() {
  return (
    <Grid container rowSpacing={1} columnSpacing={2}>
      <Grid container item>
        search components go here
      </Grid>
      <Grid container item>
        filter components go here
      </Grid>
      <Grid item xs={4}>
        <PostList />
      </Grid>
      <Grid item xs={4}>
        <PostDetails postId = {3} />
      </Grid>
    </Grid>
  );
}

export default Postings