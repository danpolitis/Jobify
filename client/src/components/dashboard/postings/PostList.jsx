import React, { useState, useEffect } from "react"
import { Grid, CircularProgress } from "@mui/material";
import PostListEntry from "./PostListEntry.jsx";

function PostList({ jobs }) {
  if (!jobs) {
    return <CircularProgress />;
  }

  return (
    <Grid item xs={6}>
      {
        jobs.map((job, i) => (
          <PostListEntry key={i} job={job} />
        ))
      }
    </Grid>
  );
}

export default PostList