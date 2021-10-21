import React, { useState } from "react";
import { Grid, CircularProgress } from "@mui/material";
import useFetch from "./hooks/useFetch.jsx";
import Search from '../../Search.jsx'
import Filter from './PostList/Filter.jsx'
import PostList from "./PostList/PostList.jsx";
import PostDetails from "./PostDetails/PostDetails.jsx";
import ApplicantsList from './ApplicantsList/ApplicantsList.jsx';

function Postings() {
  const [ searchRoute, setSearchRoute ] = useState("all");
  // should fetch diff post list depending on if role is seeker or employer
  const jobs = useFetch(`http://localhost:3000/postings/${searchRoute}`);
  // also needs context or something to be passed up & down to change details/applicants
  return (
    !jobs
    ? <CircularProgress />
    : <Grid container>
      <Grid container item>
        {/* for employer might need to either get rid of search bar or include different function for it in component file */}
        <Search setRoute={setSearchRoute} />
      </Grid>
      <Grid container item>
        <Filter />
      </Grid>
      <Grid container item rowSpacing={1} columnSpacing={2}>
        <PostList jobs={jobs} />
        {/* another conditional here for if role is employer or seeker to render applicants or post details*/}
        <PostDetails postId={jobs && jobs.length > 0 ? jobs[0].id : null} />
        {/* <ApplicantsList /> */}
      </Grid>
    </Grid>
  );
}

export default Postings