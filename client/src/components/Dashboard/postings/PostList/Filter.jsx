import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import useFetch from "../hooks/useFetch.jsx";

function Filter() {
  const [ searchRoute, setSearchRoute ] = useState("all");
  const [ keyword, setKeyword ] = useState("");
  const [ city, setCity ] = useState("");
  const jobs = useFetch(`http://localhost:3000/postings/${searchRoute}`);

  function handleSubmit(e) {
    e.preventDefault();

    if (keyword.length > 0 || city.length > 0) {
      setSearchRoute(`search?keyword=${keyword}&city=${city}`)
    }
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

export default Filter