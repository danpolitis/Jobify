import React, {useState, useEffect} from "react"
import useFetch from "./hooks/useFetch.jsx"
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';

function PostDetails(props) {
const [jobDetails, setJobDetails] = useState({})
const [job, loading] = useFetch(`http://localhost:3000/postings/posting_id/${props.postId}`);

if (loading) {
    return <CircularProgress />
}
console.log(job)
return (
    <Typography
    variant="h4"
    color="text.primary"
    align="center"
  >
    test
  </Typography>
  )
}

export default PostDetails