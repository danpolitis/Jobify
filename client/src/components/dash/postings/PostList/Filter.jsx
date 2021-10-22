import React, { useState, useContext } from "react";
import { Grid, OutlinedInput, InputLabel, MenuItem, FormControl, Select, Chip } from "@mui/material";
import { GlobalContext } from '../../../App.jsx';

function Filter({ list }) {
  // date posted: last 24 hours, last 3/7/14 days
  // field: pull
  // type: (full, part, contract, internship)
  // experience level: (entry, mid, senior)
  // salary estimate: 30-50, 60-80, 90-110, 120+

  const user = useContext(GlobalContext);
  const [ terms, setTerms ] = useState({
    wi_time: '',
    field: '',
    type: '',
    exp_level: '',
    min_salary: ''
  });
  let queryUrl = `search?`;

  const options = {
    wi_time: ['Last 24 hours', 'Last 3 days', 'Last 7 days', 'Last 14 days'],
    field: list.reduce((fields, job) => {
      if (!fields.includes(job.field)) {
        return job.field
      }
    }, []),
  }

  function handleSubmit(e) {
    e.preventDefault();
    Object.keys(terms).map((term, i) => {
      if (i < Object.keys(terms).length - 1) {
        queryUrl += '&';
      }
      if (terms[term].length > 0) {
        queryUrl += `${term}=${terms[term]}`
      }
    });
    setRoute(queryUrl);
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