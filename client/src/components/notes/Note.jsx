import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import axios from "axios";

function Note(props) {
  const date = new Date(props.note.created);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const stringd =
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

  function handleListClick(event, index, note) {
    props.setSelectedIndex(index);
    props.setCurrentNote(note);
    props.getCurrentNotes();
  }

  function handleDeleteNote(e) {
    if (props.isEmployer === "employer") {
      axios
        .delete(`http://localhost:3000/employer_notes/${props.note.id}`)
        .then(() => {
          props.getCurrentNotes();
        });
    } else {
      axios
        .delete(`http://localhost:3000/seeker_notes/${props.note.id}`)
        .then(() => {
          props.getCurrentNotes();
        });
    }
  }

  return (
    <div>
      <ListItem
        secondaryAction={
          <ListItemButton
            onClick={handleDeleteNote}
            style={{ textAlign: "right", width: "48px" }}
            xs={2}
          >
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
          </ListItemButton>
        }
      >
        <ListItemButton
          onClick={(e) => {
            handleListClick(e, props.index, props.note);
          }}
          selected={props.selectedIndex === props.index}
          name="note"
        >
          <ListItemText xs={10}>{props.note.title}</ListItemText>
        </ListItemButton>
      </ListItem>
      <div>{stringd}</div>
    </div>
  );
}

export default Note;
