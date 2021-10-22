import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import useFetch from "./dash/postings/hooks/useFetch.jsx";

function Search({ setRoute }) {
  const [ terms, setTerms ] = useState({
    keyword: '',
    city: ''
  });
  let queryUrl = `search?`;

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
      <form onSubmit={handleSubmit}>
      <TextField
        name="keyword"
        label="Keyword"
        value={terms.keyword}
        sx={{ padding: "5px", width: "30%" }}
        placeholder="Job title, description, industry..."
        onChange={e => setTerms({ ...terms, [e.target.name]: e.target.value })}
        variant="outlined"
      />
      <TextField
        name="city"
        label="City"
        value={terms.city}
        sx={{ padding: "5px", width: "30%" }}
        placeholder="City"
        onChange={e => setTerms({ ...terms, [e.target.name]: e.target.value })}
        variant="outlined"
      />
      <Button
        sx={{ margin: "2%" }}
        type="submit"
        color="primary"
        variant="contained"
        disableElevation
        onSubmit={handleSubmit}
      >
        Find jobs
      </Button>
      </form>
    </Grid>
  );
}

export default Search