import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 10,
    right: 10,
  },
}));

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const classes = useStyles();

  return (
    <div>
      <Grid
        item
        container
        xs={"auto"}
        alignItems="center"
        justifyContent="flex-end"
        direction="row"
      >
        <Tooltip title="Create Post" aria-label="add" placement="right-start">
          <Fab color="primary" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </Grid>
    </div>
  );
}
