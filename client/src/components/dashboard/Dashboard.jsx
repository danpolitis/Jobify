import React from "react";
import { Grid, Container } from "@mui/material";
import Postings from "./postings/Postings.jsx";
import Calendar from "./Calendar.jsx"

function Dashboard() {
  return (
    <Container>
      <Grid container spacing={2} sx={{ margin: "1% 0" }}>
        <Grid item xs={9}>
          <Postings />
        </Grid>
        <Grid item xs={3}>
          <Calendar/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard