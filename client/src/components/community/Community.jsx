import React from "react";
import axios from "axios";
import { makesStyles } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Community(props) {
  // const [posts, setPosts] = useState([])
  // const [currentUser, setCurrentUser] = useState(3)
  // const [isEmployer, setIsEmployer] = useState(true)

  // function getAllBlogs() {
  //   if (isEmployer === true) {
  //     axios.get(`http://localhost:3000/employer_blogs/${currentUser}`)
  //       .then((results) => {
  //         setPosts(results.data)
  //       })
  //   } else {
  //     axios.get(`http://localhost:3000/seeker_blogs/${currentUser}`)
  //       .then((results) => {
  //         setPosts(results.data)
  //       })
  //   }
  // }

  // useEffect(() => {
  //   getAllBlogs()
  // })

  return (
    <div>
      <Box>
        <Box>Community Blog</Box>
      </Box>
      <Container>
        <Typography>Articles</Typography>
        <Grid container spacing={8}>
          <Grid item md={4} xs={12} sm={10}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  blog title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  blog content
                </Typography>
              </CardContent>
              <CardActions>
                  <Typography variant="subtitle2">
                    Author
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Oct 20, 2021
                  </Typography>
                <Button size="small" style={{textAlign: 'right', paddingLeft: '120px'}}>Share</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Community;
