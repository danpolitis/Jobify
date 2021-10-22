import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import MuiAlert from "@mui/material/Alert";
import {
  Button,
  Grid,
  Modal,
  MenuItem,
  Tooltip,
  TextField,
  Snackbar,
  Stack,
} from "@mui/material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 80,
    right: 10,
  },
  container: {
    width: 750,
    height: 550,
    backgroundColor: "#FAF9F6",
    position: "absolute",
    boxShadow: 24,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

export default function CreateBlog(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [public, setPublic] = useState("Public");
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  function handleCreatePost(e, reason) {
    e.preventDefault();
    const toggle = () => setOpen(false);

    if (props.isEmployer === true) {
      axios
        .post(`http://localhost:3000/employer_blogs/${props.currentUser}`, {
          title: title,
          body: body,
          // public: public
        })
        .then(() => {
          props.getAllUserBlogs();
        })
        .then(() => toggle());
    } else {
      axios
        .post(`http://localhost:3000/seeker_blogs/${props.currentUser}`, {
          title: title,
          body: body,
          // public: public
        })
        .then(() => {
          props.getAllUserBlogs();
        })
        .then(() => toggle());
    }
  }

  const classes = useStyles();

  return (
    <>
      <Tooltip
        title="Create Post"
        aria-label="add"
        placement="right-start"
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open} onClose={handleClose}>
        <Container className={classes.container}>
          <form
            onSubmit={handleCreatePost}
            className={classes.form}
            autoComplete="off"
          >
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={12}
                placeholder="What do you want to talk about?"
                variant="outlined"
                label="Create a Post"
                size="small"
                onChange={(e) => setBody(e.target.value)}
                style={{ width: "100%" }}
              />
            </div>
            {/* <div className={classes.item}>
              <TextField
                select
                label="Visibility"
                value="Public"
                onChange={(e) => setPublic(e.target.value)}
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
              </TextField>
            </div> */}
            <Stack direction="row" xs={{ marginTop: "65px" }}>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                // onClick={handleCreatePost}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Stack>
          </form>
        </Container>
      </Modal>
    </>
  );
}
