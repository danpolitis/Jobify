import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import useFetch from "./hooks/useFetch.jsx";
import Search from './Search.jsx'
import PostList from "./PostList.jsx";
import PostDetails from "./PostDetails.jsx";

function Postings({ }) {
  const jobs = useFetch(`http://localhost:3000/postings/all`);

  return (
    !jobs
    ? <CircularProgress />
    : <Grid container>
      <Grid container item>
        <Search />
      </Grid>
      <Grid container item>
        filter components go here
      </Grid>
      <Grid container item rowSpacing={1} columnSpacing={2}>
        <PostList jobs={jobs} />
        <PostDetails postId={jobs ? jobs[0].id : null} />
      </Grid>
    </Grid>
  );
}

export default Postings