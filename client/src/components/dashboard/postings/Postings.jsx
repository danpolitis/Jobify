import React, { useState } from "react";
import { Grid, CircularProgress, Container, Typography } from "@mui/material";
import useFetch from "./hooks/useFetch.jsx";
import Search from './PostList/Search.jsx'
import PostList from "./PostList/PostList.jsx";
import PostDetails from "./PostDetails/PostDetails.jsx";
import ApplicantsList from './ApplicantsList/ApplicantsList.jsx';

function Postings(props) {
  const [ searchRoute, setSearchRoute ] = useState("all");
  // should fetch diff post list depending on if role is seeker or employer
  const jobs = useFetch(`http://localhost:3000/postings/${searchRoute}`);
  // also needs context or something to be passed up & down to change details/applicants
  return (
    !jobs
    ? <CircularProgress />
      :  <>
          <Grid>
              <Search setRoute={setSearchRoute} />
              <Typography
              variant="h6"
              align="center"
            >
              Filters
            </Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={5}  sx={{maxHeight: "100vh", overflowY:"scroll"}}>
                <PostList jobs={jobs} />
              </Grid>
              <Grid item xs={7}>
                <PostDetails postId={props.pid ? props.pid : jobs && jobs.length > 0 ? jobs[0].id : null} />
              </Grid>
            </Grid>
        </>
  );
}

export default Postings