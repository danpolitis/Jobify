import React, { useState, useContext }
import { NavLink } from "react-router-dom";
import { Card, CardContent, Typography, CircularProgress, Chip, Button, GlobalStyles } from "@mui/material";
import useFetch from "../hooks/useFetch.jsx"
import { GlobalContext } from '../../../App.jsx';
import { DashboardContext } from '../../Dashboard.jsx';
import './Posts.css';

function PostListEntry({ job }) {
  const [ removeClicked, setRemoveClicked ] = useState(false);
  const { id, title, employer_id, city, salary, description, posted_date } = job;
  const employerData = useFetch(`http://localhost:3000/employers/${employer_id}`)
  const { state } = useContext(GlobalContext);
  const { dashboardDispatch } = useContext(DashboardContext);

  const handleRemovePost = () => {
    axios.put(`http://localhost:3000/postings/posting_id/${id}`)
      .then(() => {
        if (!removeClicked) {
          dashboardDispatch({ type: 'removePost', data: true });
        } else {
          dashboardDispatch({ type: 'renewedPost', data: true });
        }

        setRemoveClicked(!removeClicked);
      });
  }

  return (
    !employerData
    ? <CircularProgress />
    :
    <>
    <GlobalStyles
          styles={{textDecoration:"none"}}
    />
    <NavLink to={`/dashboard/${id}`}>
    <Card className="joblist" variant="outlined" sx={{ textAlign: "left" }}>
      <CardContent>
        <Typography variant="subtitle2" sx={{fontWeight:"700", color:"#49475B", textTransform:"uppercase"}}>
          {employerData[0].uuid}
        </Typography>
        <Typography variant="h5" sx={{fontWeight:"700", color:"#49475B"}}>
          {title ? title : "Untitled"}
        </Typography>
        {
          state.role === 'employer' &&
            <Button
              variant="contained"
              disableElevation
              onClick={handleRemovePost}
              >
              {!removeClicked ? 'Remove' : 'Add'}
            </Button>
        }
        <Typography variant="subtitle1">
          {city}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(salary)}
        </Typography>
        <Typography variant="body1" sx={{ margin: "2% 0 2% 0"}}>
          {description.length > 100 ? description.substring(0, 100) + "..." : description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Posted ${new Date(posted_date).toLocaleDateString('en-US')}`}
        </Typography>
      </CardContent>
    </Card>
    </NavLink>
    </>
  );
}

export default PostListEntry