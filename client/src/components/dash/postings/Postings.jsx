import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import { Grid, CircularProgress, Container, Typography } from "@mui/material";
import axios from 'axios';
import Search from '../../Search.jsx'
import Filter from './PostList/Filter.jsx'
import PostList from "./PostList/PostList.jsx";
import PostDetails from "./PostDetails/PostDetails.jsx";
import ApplicantsList from './ApplicantsList/ApplicantsList.jsx';
import useFetch from "./hooks/useFetch.jsx"
import { GlobalContext } from '../../App.jsx';

function Postings({ pid, search }) {
  const [ searchRoute, setSearchRoute ] = useState(search ? search : "all");
  const [ jobs, setJobs ] = useState([]);
  const { state } = useContext(GlobalContext);

  useEffect(() => {
    !state.role
      ? setJobs(useFetch(`http://localhost:3000/postings/${searchRoute}`))
      : axios.get(`http://localhost:3000/postings/employer/${state.userId}`)
        .then((data) => {
          console.log(data.data);
          setJobs(data.data);
        });
  }, []);

  return (
    !jobs
    ? <CircularProgress />
    : <>
      <Grid>
        <Search setRoute={setSearchRoute} />
        <Filter route={searchRoute} setRoute={setSearchRoute} />
        </Grid>
        <Grid container spacing={2}>
          {
            jobs.length === 0 && !state.role
            ? <Grid item xs={12} justifyContent="center">
              <Typography>No jobs matched your search, try again!</Typography>
            </Grid>
            : jobs.length === 0 && state.role
              ? <Grid item xs={12} justifyContent="center">
                  <Typography>You have no job postings! <Link to="/new-post">Add a job!</Link></Typography>
                </Grid>
              : <>
                  <Grid item xs={5}  sx={{maxHeight: "100vh", overflowY:"scroll"}}>
                    <PostList jobs={jobs} />
                  </Grid>
                  <Grid item xs={7}>
                    {
                      !state.role
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