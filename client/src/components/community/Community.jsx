import React from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
  },
  blogsContainer: {
    paddingTop: "2",
  },
  blogTitle: {
    fontWeight: 350,
    paddingBottom: "2",
  },
}));

function Community(props) {
  const classes = useStyles();
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
      <Box className={classes.hero}>
        <Box>Community Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        {/* <Typography variant="h4">Articles</Typography> */}
        <Grid
          container
          rowSpacing={8}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "200" }}
        >
          <Grid item md={12} xs={12} sm={10} xl={6}>
            <Card fullWidth sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography variant="h4" className={classes.blogTitle}>
                  Lorem ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap="true">
                  This blog post shows a few different types of content that are
                  supported and styled with Material styles. Basic typography,
                  images, and code are all supported. You can extend these by
                  modifying Markdown.js. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Aenean eu leo
                  quam. Pellentesque ornare sem lacinia quam venenatis
                  vestibulum. Sed posuere consectetur est at lobortis. Cras
                  mattis consectetur purus sit amet fermentum. Curabitur blandit
                  tempus porttitor. Nullam quis risus eget urna mollis ornare
                  vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Etiam porta sem malesuada magna mollis euismod. Cras
                  mattis consectetur purus sit amet fermentum. Aenean lacinia
                  bibendum nulla sed consectetur.
                </Typography>
              </CardContent>
              <CardActions>
                <Typography variant="subtitle2">Author</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Oct 20, 2021
                </Typography>
                <Button
                  size="small"
                  style={{ textAlign: "right", paddingLeft: "120px" }}
                >
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={12} xs={12} sm={10} xl={6}>
            <Card fullWidth sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography variant="h4" className={classes.blogTitle}>
                  blog title
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap="true">
                  blog content
                </Typography>
              </CardContent>
              <CardActions>
                <Typography variant="subtitle2">Author</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Oct 20, 2021
                </Typography>
                <Button
                  size="small"
                  style={{ textAlign: "right", paddingLeft: "120px" }}
                >
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={12} xs={12} sm={10} xl={6}>
            <Card fullWidth sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography variant="h4" className={classes.blogTitle}>
                  blog title
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap="true">
                  blog content
                </Typography>
              </CardContent>
              <CardActions>
                <Typography variant="subtitle2">Author</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Oct 20, 2021
                </Typography>
                <Button
                  size="small"
                  style={{ textAlign: "right", paddingLeft: "120px" }}
                >
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={12} xs={12} sm={10} xl={6}>
            <Card fullWidth sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography variant="h4" className={classes.blogTitle}>
                  blog title
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap="true">
                  blog content
                </Typography>
              </CardContent>
              <CardActions>
                <Typography variant="subtitle2">Author</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Oct 20, 2021
                </Typography>
                <Button
                  size="small"
                  style={{ textAlign: "right", paddingLeft: "120px" }}
                >
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Community;
