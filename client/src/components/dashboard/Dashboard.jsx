import React from "react";
import { Grid, Container } from "@mui/material";
import Postings from "./postings/Postings.jsx";
import UserCalendar from "./UserCalendar.jsx"
import { useParams } from "react-router-dom";

function Dashboard({ location }) {
  const { id } = useParams();
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Postings pid={id} search={location.state} />
        </Grid>
        <Grid item xs={3}>
          <UserCalendar/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard