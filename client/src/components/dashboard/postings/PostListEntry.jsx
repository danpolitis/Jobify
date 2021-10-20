import React from "react"
import { Card, CardHeader, CardContent, Typography, CircularProgress } from "@mui/material";
import useFetch from "./hooks/useFetch.jsx"

function PostListEntry({ job }) {
  const { title, employer_id, city, salary, description, posted_date } = job;
  const employerData = useFetch(`http://localhost:3000/employers/${employer_id}`)

  return (
    !employerData
    ? <CircularProgress />
    : <Card variant="outlined" sx={{ textAlign: "left" }}>
      <CardContent>
        <Typography variant="subtitle2" >
          {employerData[0].uuid}
        </Typography>
        <Typography variant="h6">
          {title ? title : "Untitled"}
        </Typography>
        <Typography variant="subtitle1">
          {`${employerData[0].city}, ${employerData[0].state}`}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(salary)}
        </Typography>
        <Typography variant="body1" sx={{ margin: "2% 0 2% 0"}}>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Posted ${new Date(posted_date).toLocaleDateString('en-US')}`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PostListEntry