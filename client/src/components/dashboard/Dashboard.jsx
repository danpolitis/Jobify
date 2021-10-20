import React from "react";
import { Grid } from "@mui/material";
import Postings from "./postings/Postings.jsx";

function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <Postings />
      </Grid>
      <Grid item xs={3}>
        calendar component goes here
      </Grid>
    </Grid>
  );
}

export default Dashboard