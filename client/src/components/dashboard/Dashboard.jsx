import React from "react";
import { Grid } from "@mui/material";
import Postings from "./postings/Postings.jsx";
import Calendar from "./Calendar.jsx"

function Dashboard() {
  return (
    <Grid container spacing={2} sx={{ margin: "1% 0" }}>
      <Grid item xs={9}>
        <Postings />
      </Grid>
      <Grid item xs={3}>
        <Calendar/>
      </Grid>
    </Grid>
  );
}

export default Dashboard