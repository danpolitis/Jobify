import React, { useState, useContext } from "react";
import { Grid, OutlinedInput, MenuItem, Select } from "@mui/material";

function Filter({ list }) {
  // date posted: last 24 hours, last 3/7/14 days
  // field: pull
  // type: (full, part, contract, internship)
  // experience level: (entry, mid, senior)
  // salary estimate: 30-50, 60-80, 90-110, 120+

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
        fields.push(job.field);
      }
      return fields;
    }, []),
    type: list.reduce((types, job) => {
      if (!types.includes(job.type)) {
        types.push(job.type);
      }
      return types;
    }, []),
    exp_level: list.reduce((levels, job) => {
      if (!levels.includes(job.exp_level)) {
        levels.push(job.exp_level);
      }
      return levels;
    }, []),
    min_salary: ['$30-50,000', '$60-80,000', '$90-110,000', '$110,000+']
  }

  const labels = {
    wi_time: 'Date posted',
    field: 'Industry/field',
    type: 'Type',
    exp_level: 'Experience Level',
    min_salary: 'Salary Estimate'
  }

  function handleChange(e) {
    setTerms({ ...terms, [e.target.name]: e.target.value });
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
      <form>
      {
        Object.keys(options).map((filter, i) => {
            <Select
              key={i}
              name={filter}
              value={terms[filter]}
              onChange={handleChange}
              input={<OutlinedInput label={filter} />}
            >
              {
                Object.keys(options).map((label, i) => (
                  <MenuItem
                    key={i}
                    value={options.label}
                  >
                    {options.label}
                  </MenuItem>
                ))
              }
            </Select>
        })
      }
      </form>
    </Grid>
  );
}

export default Filter