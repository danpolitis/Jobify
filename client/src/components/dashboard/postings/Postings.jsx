import React, { useState } from "react";
import { Grid, CircularProgress } from "@mui/material";
import useFetch from "./hooks/useFetch.jsx";
import Search from './PostList/Search.jsx'
import PostList from "./PostList/PostList.jsx";
import PostDetails from "./PostDetails/PostDetails.jsx";
import ApplicantsList from './ApplicantsList/ApplicantsList.jsx';
import { GlobalContext } from '../../App.jsx';

function Postings({ }) {
  const [ searchRoute, setSearchRoute ] = useState("all");
  const { state } = useContext(GlobalContext);
  const url = state.role === 'seeker'
    ? `http://localhost:3000/postings/${searchRoute}`;
    : `http://localhost:3000/postings/employer/${state.userId}`
  const jobs = useFetch(url);
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
        filter components go here
      </Grid>
      <Grid container item rowSpacing={1} columnSpacing={2}>
        <PostList jobs={jobs} />
        {state.role === 'seeler'
          ? <PostDetails postId={jobs && jobs.length > 0 ? jobs[0].id : null} />
          : <ApplicantsList postId={jobs && jobs.length > 0 ? jobs[0].id : null}/>
        }
      </Grid>
    </Grid>
  );
}

export default Postings