import React from "react"
import { Grid, Typography } from "@mui/material";
import PostListEntry from "./PostListEntry.jsx";

function PostList({ jobs }) {
  return (
    <Grid item xs={5} sx={{ maxHeight: "80vh", overflow: "auto" }}>
      {
        jobs.length > 0
        ? jobs.map((job, i) => (
          <PostListEntry key={i} job={job} />
        ))
        : <Typography>No jobs match your search, try again!</Typography>
      }
    </Grid>
  );
}

export default PostList