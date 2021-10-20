import React from "react"
import { Grid } from "@mui/material";
import PostListEntry from "./PostListEntry.jsx";

function PostList({ jobs }) {
  return (
    <Grid item xs={5} sx={{ maxHeight: "80vh", overflow: "auto" }}>
      {
        jobs.map((job, i) => (
          <PostListEntry key={i} job={job} />
        ))
      }
    </Grid>
  );
}

export default PostList