import React from 'react';
import Applicant from './Applicant.jsx';
import { Grid, CircularProgress, Divider, Stack } from '@mui/material';
// pass down or usecontext for posting id
export default ApplicantsList = () => {
  // fetch list of applicants to a job posting
  // map list of applicants and render
  // const applicants = useFetch(`http://localhost:3000/applications/`);
  const applicants = [{
    name: 'John Doe',
    email: 'sdhjlgf@guisjdh.com',
    years_exp: '4',
    years_edu: "Bachelor's"
  }, {
    name: 'Joe Schmoe',
    email: 'asdghrje@guisjdh.com',
    years_exp: '2',
    years_edu: "Master's"
  }, {
    name: 'Jane Dane',
    email: 'asdfghethrtah@afdg.com',
    years_exp: '6',
    years_edu: "Master's"
  }]

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