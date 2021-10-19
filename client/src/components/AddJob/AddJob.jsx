import React from 'react';
import { Grid, Typography } from '@mui/material';
import AddJobForm from './AddJobForm.jsx';

export default AddJob = () => {
  return (
    <>
      {/* <Typography
        variant="h3"
        color="text.primary"
      >Add a new job</Typography> */}
      <h3>Add a new job</h3>
      <Grid container alignItems="center" direction="column">
        <AddJobForm />
      </Grid>
    </>
  )
};