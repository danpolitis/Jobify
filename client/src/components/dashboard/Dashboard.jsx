import React from "react";
import { Grid, Container } from "@mui/material";
import Postings from "./postings/Postings.jsx";
import UserCalendar from "./UserCalendar.jsx"

function Dashboard({ location }) {
  console.log(location)
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Postings search={location.search} />
        </Grid>
        <Grid item xs={3}>
          <UserCalendar/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard