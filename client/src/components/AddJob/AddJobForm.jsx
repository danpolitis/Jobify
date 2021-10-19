import React from 'react';
import { TextField, Button, Typography } from '@mui/material';

export default AddJobForm = () => {

  return(
    // <Grid>
      <form style={{ maxWidth: '500px' }}>
        <TextField
          id="add-job-title"
          label="Job Title"
          fullWidth
          margin="normal"
          name="title"
        />
        <TextField
          id="add-job-field"
          label="Field"
          fullWidth
          margin="normal"
          name="field"
        />
        <TextField
          id="add-job-city"
          label="City"
          fullWidth
          margin="normal"
          name="city"
        />
        <TextField
          id="add-job-salary"
          label="Salary"
          fullWidth
          margin="normal"
          name="salary"
        />
        <TextField
          id="add-job-benefits"
          label="Benefits"
          multiline
          rows={3}
          fullWidth
          margin="normal"
          name="benefits"
        />
        <TextField
          id="add-job-requirements"
          label="Requirements"
          multiline
          rows={3}
          fullWidth
          margin="normal"
          name="requirements"
        />
        <TextField
          id="add-job-description"
          label="Job Description"
          multiline
          rows={7}
          fullWidth
          margin="normal"
          name="description"
        />
        <Button
          color="primary"
          variant="contained"
          disableElevation
          style={{ marginTop: '16px' }}
        >Add New Job</Button>
      </form>
    // </Grid>
  )
};