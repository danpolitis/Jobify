import React, { useState, useContext } from "react";
import { Grid, OutlinedInput, InputLabel, MenuItem, FormControl, Select, Chip } from "@mui/material";
import { GlobalContext } from '../../../App.jsx';

function Filter({ list }) {
  // date posted: last 24 hours, last 3/7/14 days
  // salary estimate: 30-50, 60-80, 90-110, 120+
  // type: (full, part, contract, internship)
  // experience level: (entry, mid, senior)

  const [ filter, setFilter ] = useState("");
  const [ searchRoute, setSearchRoute ] = useState("all");

  const user = useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (keyword.length > 0 || city.length > 0) {
      setSearchRoute(`search?keyword=${keyword}&city=${city}`)
    }
  }

  return (
    <Grid item xs justifyContent="center">
      {
        user.role !== 'employer'
        ? null
        : null
      }
    </Grid>
  );
}

export default Filter