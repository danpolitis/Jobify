import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from "@mui/material/Grid";

function Note(props) {
  const date = new Date(props.note.created)
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  const stringd = (monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear())

  function handleListClick(event, index, note) {
    props.setSelectedIndex(index)
    props.setCurrentNote(note)
  }

  return (
    <div>
      <ListItemButton onClick={(e) => {handleListClick(e, props.index, props.note)}} selected={props.selectedIndex === props.index}  name='note'>
        <ListItemText>{props.note.title}</ListItemText>
      </ListItemButton>
      <div>{stringd}</div>
    </div>
  )
}

export default Note;