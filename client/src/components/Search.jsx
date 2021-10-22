import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Grid, TextField, Button } from "@mui/material";
import useFetch from "./dash/postings/hooks/useFetch.jsx";

function Search({ setRoute }) {
  const [ terms, setTerms ] = useState({
    keyword: '',
    city: ''
  });
  const history = useHistory();
  let queryUrl = `search?`;

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/dashboard');
    if (terms.keyword === '' && terms.city === '') {
      setRoute("all");
    } else {
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
  }

  return (
    <Grid item xs className="backgroundText">
      <form className="backgroundText" onSubmit={handleSubmit}>
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
        sx={{ margin: "5px", padding:"15px 30px", fontWeight:"700", textShadow:"0 1px 1px rgba(0, 0, 0, 0.6)" }}
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