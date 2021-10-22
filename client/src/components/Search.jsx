import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import useFetch from "./dashboard/postings/hooks/useFetch.jsx";

function Search({ setRoute }) {
  const [ keyword, setKeyword ] = useState("");
  const [ city, setCity ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (keyword.length > 0 || city.length > 0) {
      setRoute(`search?keyword=${keyword}&city=${city}`)
    }
  }

  return (
    <Grid item xs justifyContent="center">
      <form onSubmit={handleSubmit}>
      <TextField
        name="keyword"
        label="Keyword"
        value={keyword}
        sx={{ padding: "5px", width: "30%" }}
        placeholder="Job title, description, industry..."
        onChange={e => setKeyword(e.target.value)}
        variant="outlined"
      />
      <TextField
        name="city"
        label="City"
        value={city}
        sx={{ padding: "5px", width: "30%" }}
        placeholder="City"
        onChange={e => setCity(e.target.value)}
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