import React, { useState, useEffect, useContext } from "react";
import { Grid, FormControl, InputLabel, OutlinedInput, MenuItem, Select } from "@mui/material";
import useFetch from "../hooks/useFetch.jsx"

function Filter({ route, setRoute }) {
  const jobs = useFetch('http://localhost:3000/postings/all');
  const [ terms, setTerms ] = useState({
    wi_time: '',
    field: '',
    type: '',
    exp_level: '',
    min_salary: ''
  });

  useEffect(() => {
    if (route === "all") {
      setTerms({
        wi_time: '',
        field: '',
        type: '',
        exp_level: '',
        min_salary: ''
      });
    }
  }, [route])

  const labels = {
    wi_time: 'Date posted',
    field: 'Industry',
    type: 'Type',
    exp_level: 'Exp. Level',
    min_salary: 'Salary Est.'
  }

  const options = jobs ? {
    wi_time: ['Last 24 hours', 'Last 3 days', 'Last 7 days', 'Last 14 days'],
    field: jobs.reduce((fields, job) => {
      if (!fields.includes(job.field)) {
        fields.push(job.field);
      }
      return fields;
    }, []),
    type: jobs.reduce((types, job) => {
      if (!types.includes(job.type)) {
        types.push(job.type);
      }
      return types;
    }, []),
    exp_level: jobs.reduce((levels, job) => {
      if (!levels.includes(job.exp_level)) {
        levels.push(job.exp_level);
      }
      return levels;
    }, []),
    min_salary: ['$30-50,000', '$60-80,000', '$90-110,000', '$110,000+']
  } : null;

  function convertValue(column, value) {
    return column === 'wi_time'
    ? value.substring(5, value.length)
    : column === 'min_salary'
    ? parseInt(value.substring(1,3)) * 1000
    : value;
  }

  function handleChange(e) {
    let queryUrl = `search?`;
    let value = convertValue(e.target.name, e.target.value);
    queryUrl += `${e.target.name}=${value}&`;

    Object.keys(terms).map((term, i) => {
      let value = convertValue(term, terms[term]);
      if (terms[term].length > 0 && !queryUrl.includes(term)) {
        queryUrl += `${term}=${value}&`;
      }
      if (i === Object.keys(terms).length - 1) {
        queryUrl = queryUrl.slice(0, queryUrl.length - 1);
      }
    });

    setTerms({ ...terms, [e.target.name]: e.target.value });
    setRoute(queryUrl);
  }

  return (
    jobs
    ? <Grid item xs justifyContent="center">
      {
        Object.keys(labels).map((filter, i) => (
          <FormControl key={i} sx={{ m: 1, width: 130 }}>
            <InputLabel id={filter}>{labels[filter]}</InputLabel>
            <Select
              labelId={filter}
              name={filter}
              value={terms[filter]}
              onChange={handleChange}
              input={<OutlinedInput label={labels[filter]} />}
            >
              {
                options[filter].map((option, i) => (
                  <MenuItem
                    key={i}
                    value={option}
                  >
                    {option}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        ))
      }
    </Grid>
    : null
  );
}

export default Filter