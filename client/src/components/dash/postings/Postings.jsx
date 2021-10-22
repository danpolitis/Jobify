import React, { useState, useContext } from "react";
import { Grid, CircularProgress, Container, Typography } from "@mui/material";
import Search from '../../Search.jsx'
import Filter from './PostList/Filter.jsx'
import PostList from "./PostList/PostList.jsx";
import PostDetails from "./PostDetails/PostDetails.jsx";
import ApplicantsList from './ApplicantsList/ApplicantsList.jsx';
import useFetch from "./hooks/useFetch.jsx"
import { GlobalContext } from '../../App.jsx';

function Postings({ pid, search }) {
  const [ searchRoute, setSearchRoute ] = useState(search ? search : "all");
  const { state } = useContext(GlobalContext);
  const url = state.role === 'seeker'
    ? `http://localhost:3000/postings/${searchRoute}`
    : `http://localhost:3000/postings/employer/${state.userId}`
  const jobs = useFetch(url);

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
        <Filter list={jobs} />
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
                {
                  state.role === 'seeker'
                    ? <PostDetails postId={pid ? pid : jobs[0].id} />
                    : <ApplicantsList postId={jobs && jobs.length > 0 ? jobs[0].id : null}/>
                }
              </Grid>
            </>
          }
        </Grid>
    </>
  );
}

export default Postings