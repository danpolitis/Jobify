import React, { useState, useEffect } from "react"
import { Card, CircularProgress } from "@mui/material";
import useFetch from "./Hooks/useFetch.jsx";

function PostList(props) {
  const [ jobs, setJobs ] = useState([])
  const [ all, loading ] = useFetch(`http://localhost:3000/postings/all`);

  if (loading) {
      return <CircularProgress />
  }
  return (
    <div>list</div>
  );
}

export default PostList