import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// import Grid from "@mui/material/Grid";
// import MenuItem from "@mui/material/MenuItem"
// import Modal from "@mui/material/Modal";
// import Tooltip from "@mui/material/Tooltip";
// import TextField from "@mui/material/TextField";
import {
  Button,
  Grid,
  Modal,
  MenuItem,
  Tooltip,
  TextField,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 10,
    right: 10,
  },
  container: {
    width: 750,
    height: 600,
    backgroundColor: "white",
    position: "absolute",
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

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export default function CreateBlog(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [public, setPublic] = useState("Public");
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    e.preventDefault();
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  function handleCreatePost(e) {
    e.preventDefault();
    if (props.isEmployer === true) {
      console.log('this is fine')
      console.log(e.target);
      axios
        .post(`http://localhost:3000/employer_blogs/${props.currentUser}`, {
          title: title,
          body: body,
          // public: public
        })
        .then(() => {
          props.getAllUserBlogs();
        });
    } else {
      console.log('this is ok')
      axios
        .post(`http://localhost:3000/seeker_blogs/${props.currentUser}`, {
          title: title,
          body: body,
          // public: public
        })
        .then(() => {
          props.getAllUserBlogs();
        });
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
      <Modal open={open}>
        <Container className={classes.container}>
          <form
            className={classes.form}
            autoComplete="off"
            // onSubmit={handleCreatePost}
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
            <div className={classes.item}>
              <TextField
                select
                label="Visibility"
                onChange={(e) => setPublic(e.target.value)}
                value="Public"
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                // type="submit"
                onClick={handleCreatePost}
                // onClick={() => setOpenAlert(true)}
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
            </div>
          </form>
        </Container>
      </Modal>
      {/* <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Post has been created!
        </Alert>
      </Snackbar> */}
    </>
  );
}
