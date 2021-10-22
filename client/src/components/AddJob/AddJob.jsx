import React, { useState } from 'react';
import { Grid, Typography, Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddJobForm from './AddJobForm.jsx';

export default AddJob = () => {
  const [ errorStatus, setErrorStatus ] = useState(false);

  return (
    <>
      <Collapse in={errorStatus}>
        <Alert
          severity="error"
          sx={{ mt: '8px' }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setErrorStatus(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Something went wrong with posting the job, please try again!
        </Alert>
      </Collapse>
      <Typography
        variant="h3"
        color="text.primary"
      >Add a new job</Typography>
      <Grid container alignItems="center" direction="column">
        <AddJobForm
          setErrorStatus={setErrorStatus}
        />
      </Grid>
    </>
  )
};