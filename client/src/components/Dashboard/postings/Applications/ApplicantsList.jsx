import React from 'react';
import Applicants from './Applicants.jsx';
import { Grid, CircularProgress } from '@mui/material';
// pass down or usecontext for posting id
export default ApplicantsList = () => {
  // fetch list of applicants to a job posting
  // map list of applicants and render
  // const applicants = useFetch(`http://localhost:3000/applications/`);
  const applicants = [{
    name: 'John Doe',
    email: 'sdhjlgf@guisjdh.com'
    years_exp: '4',
    years_edu: "Bachelor's"
  }]

  return (
    !applicants
    ? <CircularProgress />
    : <Grid item xs={5} sx={{ maxHeight: "80vh", overflow: "auto" }}>
      {
        applicants.map((applicant, i) => (
          <Applicants key={i} applicantInfo={applicant} />
        ))
      }
    </Grid>
  )
};