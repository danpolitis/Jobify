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
    <div>Filter component in progress...</div>
  );
}

export default Filter