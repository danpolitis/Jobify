import React, { useState } from "react"
import { Grid, Card, Typography, CircularProgress } from "@mui/material";
import useFetch from "./hooks/useFetch.jsx"

function PostDetails({ postId }) {
  const job = useFetch(`http://localhost:3000/postings/posting_id/${postId}`);

  return (
    !job
    ? <CircularProgress />
    : <Grid item xs={6}>
      <Card><Typography>{job.title}</Typography></Card>
    </Grid>
  )
}

export default PostDetails