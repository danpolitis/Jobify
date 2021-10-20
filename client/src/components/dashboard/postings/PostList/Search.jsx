import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import useFetch from "../hooks/useFetch.jsx";

function Search() {
  const [ keyword, setKeyword ] = useState("");
  const [ city, setCity ] = useState("");

  function handleSubmit() {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <Grid item xs justifyContent="center">
      <form onSubmit={handleSubmit}>
      <TextField
        label="Keyword"
        value={keyword}
        sx={{ padding: "5px", minWidth: "10px" }}
        placeholder="Job title, description, industry"
        onChange={e => setKeyword(e.target.value)}
        variant="outlined"
      />
      <TextField
        label="City"
        value={city}
        sx={{ padding: "5px", minWidth: "10px" }}
        placeholder="City"
        onChange={e => setCity(e.target.value)}
        variant="outlined"
      />
      <Button
        sx={{ margin: "2%" }}
        type="submit"
        color="primary"
        variant="contained"
        disableElevation
      >
        Find jobs
      </Button>
      </form>
    </Grid>
  );
}

export default Search