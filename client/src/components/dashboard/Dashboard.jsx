import React from "react"
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import Post from "./Post.jsx"
import PostDetails from "./PostDetails.jsx"

function Dashboard(props) {
  let placeholder = new Array(10).fill('Dummy Listing');
  const posts = placeholder.map((item, index) => {
  return <Post key = {index} title = {item} />
  })

  return (
    <Container sx={{padding:"25px 0"}}>

    <Grid container spacing={2} >
      <Grid item xs={4}>
        <Stack>
          {posts}
        </Stack>
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid item xs={4} sx={{paddingLeft:"20px"}}>
        <PostDetails postId = {5} />
      </Grid>
    </Grid>
    </Container>
  );
}

export default Dashboard