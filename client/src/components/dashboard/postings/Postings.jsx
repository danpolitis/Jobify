import React, { useState } from "react";
import { Grid, CircularProgress, Container, Typography } from "@mui/material";
import useFetch from "./hooks/useFetch.jsx";
import Search from './PostList/Search.jsx'
import PostList from "./PostList/PostList.jsx";
import PostDetails from "./PostDetails/PostDetails.jsx";

function Postings({ }) {
  const [ searchRoute, setSearchRoute ] = useState("all");
  const jobs = useFetch(`http://localhost:3000/postings/${searchRoute}`);

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
                <PostDetails postId={jobs && jobs.length > 0 ? jobs[0].id : null} />
              </Grid>
            </Grid>
        </>
  );
}

export default Postings