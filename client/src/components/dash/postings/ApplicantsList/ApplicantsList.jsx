import React, { useState } from 'react';
import Applicant from './Applicant.jsx';
import { Grid, CircularProgress, Divider, Stack } from '@mui/material';
import useFetch from '../hooks/useFetch.jsx'

export default ApplicantsList = ({ postId }) => {
  const applicants = useFetch(`http://localhost:3000/applications/employer/${postId}`);

  return (
    !applicants
    ? <CircularProgress />
    : <Grid
        item
        xs={7}
        sx={{ maxHeight: "80vh", overflow: "auto", pb: '8px', border: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <Stack
          spacing={{xs: 3}}
          divider={<Divider variant="middle" />}
        >
          {applicants.map((applicant, i) => <Applicant key={i} applicantInfo={applicant} />)}
        </Stack>
    </Grid>
  )
};