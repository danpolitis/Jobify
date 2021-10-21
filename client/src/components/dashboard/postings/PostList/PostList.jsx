import React from "react"
import { Stack } from "@mui/material";
import PostListEntry from "./PostListEntry.jsx";

function PostList({ jobs }) {
  return (
    <Stack spacing={2} sx={{overflowY: "scroll"}}>
      {
        jobs.length > 0
        ? jobs.map((job, i) => (
          <PostListEntry key={i} job={job} />
        ))
        : <Typography>No jobs match your search, try again!</Typography>
      }
    </Stack>
  );
}

export default PostList