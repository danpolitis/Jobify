import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import useFetch from "../hooks/useFetch.jsx";

function Search({ setRoute }) {
  const [ keyword, setKeyword ] = useState("");
  const [ city, setCity ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e)
    keyword.length > 0
    ? setRoute(`keyword/${keyword}`)
    : city.length > 0
    ? setRoute(`city/${city}`)
    : null;
  }

  return (
    <Grid item xs justifyContent="center">
      <form onSubmit={handleSubmit}>
      <TextField
        name="keyword"
        label="Keyword"
        value={keyword}
        sx={{ padding: "5px", minWidth: "10px" }}
        placeholder="Job title, description, industry"
        onChange={e => setKeyword(e.target.value)}
        variant="outlined"
      />
      <TextField
        name="city"
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
        onSubmit={handleSubmit}
      >
        Find jobs
      </Button>
      </form>
    </Grid>
  );
}

export default Search