import React from "react"
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Button";
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
    <Container>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={{xs: 4}}
      >
        <Stack>
          {posts}
        </Stack>
        <PostDetails postId = {3} />
      </Stack>
    </Container>
  );
}

export default Dashboard