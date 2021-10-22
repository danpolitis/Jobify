import React, { useState } from "react";
import { Grid, CircularProgress, Container, Typography } from "@mui/material";
import Search from '../../Search.jsx'
import Filter from './PostList/Filter.jsx'
import PostList from "./PostList/PostList.jsx";
import PostDetails from "./PostDetails/PostDetails.jsx";
import ApplicantsList from './ApplicantsList/ApplicantsList.jsx';
import useFetch from "./hooks/useFetch.jsx";

function Postings({ pid, search }) {
  const [ searchRoute, setSearchRoute ] = useState(search ? search : "all");
  // should fetch diff post list depending on if role is seeker or employer
  const jobs = useFetch(`http://localhost:3000/postings/${searchRoute}`);
  // also needs context or something to be passed up & down to change details/applicants

  return (
    !jobs
    ? <CircularProgress />
    : <>
      <Grid>
        <Search setRoute={setSearchRoute} />
          <Typography
          variant="h6"
          align="center"
        >
        <Filter />
        </Typography>
        </Grid>
        <Grid container spacing={2}>
          {
            jobs.length === 0
            ? <Grid item xs={12} justifyContent="center">
              <Typography>No jobs matched your search, try again!</Typography>
            </Grid>
            : <>
              <Grid item xs={5}  sx={{maxHeight: "100vh", overflowY:"scroll"}}>
                <PostList jobs={jobs} />
              </Grid>
              <Grid item xs={7}>
                <PostDetails postId={pid ? pid : jobs[0].id} />
              </Grid>
            </>
          }
        </Grid>
    </>
  );
}

export default Postings