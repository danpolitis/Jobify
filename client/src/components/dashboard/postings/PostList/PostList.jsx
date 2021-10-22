import React from "react"
import { Stack, Typography } from "@mui/material";
import PostListEntry from "./PostListEntry.jsx";

function PostList({ jobs }) {
  return (
    <Stack spacing={2} sx={{overflowY: "scroll"}}>
      {
        jobs.map((job, i) => (
          <PostListEntry key={i} job={job} />
        ))
      }
    </Stack>
  );
}

export default PostList