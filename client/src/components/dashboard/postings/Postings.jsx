import React, { useState } from "react";
import { Grid, CircularProgress } from "@mui/material";
import useFetch from "./hooks/useFetch.jsx";
import Search from '../../Search.jsx'
import Filter from './PostList/Filter.jsx'
import PostList from "./PostList/PostList.jsx";
import PostDetails from "./PostDetails/PostDetails.jsx";

function Postings() {
  const [ searchRoute, setSearchRoute ] = useState("all");
  const jobs = useFetch(`http://localhost:3000/postings/${searchRoute}`);

  return (
    !jobs
    ? <CircularProgress />
    : <Grid container>
      <Grid container item>
        <Search setRoute={setSearchRoute} />
      </Grid>
      <Grid container item>
        <Filter />
      </Grid>
      <Grid container item rowSpacing={1} columnSpacing={2}>
        <PostList jobs={jobs} />
        <PostDetails postId={jobs.length > 0 ? jobs[0].id : null} />
      </Grid>
    </Grid>
  );
}

export default Postings