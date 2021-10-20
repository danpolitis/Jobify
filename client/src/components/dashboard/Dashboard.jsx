import React from "react";
import { Grid } from "@mui/material";
import Postings from "./postings/Postings.jsx";

function Dashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Postings />
      </Grid>
      <Grid item xs={4}>
        calendar component goes here
      </Grid>
    </Grid>
  );
}

export default Dashboard