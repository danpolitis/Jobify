import React from "react"
import { Card, Typography, CircularProgress } from "@mui/material";
import useFetch from "./hooks/useFetch.jsx"

function PostListEntry({ job }) {
  const { title, employer_id, city, salary, description, posted_date } = job;
  const employerData = useFetch(`http://localhost:3000/employers/${employer_id}`)

  return (
    !employerData
    ? <CircularProgress />
    : <Card variant="outlined">
      <Typography variant="subtitle2" align="left">
        {employerData[0].uuid}
      </Typography>
      <Typography variant="h6" align="left">
        {title ? title : "Untitled"}
      </Typography>
      <Typography variant="subtitle1" align="left">
        {`${employerData[0].city}, ${employerData[0].state}`}
      </Typography>
      <Typography variant="subtitle1" fontWeightBold align="left">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(salary)}
      </Typography>
      <Typography variant="body1" align="left">
        {description}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="left">
        {`Posted ${new Date(posted_date).toLocaleDateString('en-US')}`}
      </Typography>
    </Card>
  );
}

export default PostListEntry