import React, { useState, useEffect } from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import ListItemIcon from '@mui/material/ListItemIcon';

import Note from './Note.jsx'
import CreateNote from './CreateNote.jsx'

function NotesList(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false)

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
      <List>
        <ListItemButton style={{height: '60px', backgroundColor: '#49475B'}} onClick={handleOpen}>
          <ListItemIcon style={{margin: 'auto', color: '#799496'}}>
            <AddIcon />
          </ListItemIcon>
        </ListItemButton>
        {props.notes.map((note, i) => {
          return <Note setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} index={i} key={i} note={note} setCurrentNote={props.setCurrentNote}/>
        })}
        <CreateNote handleClose={handleClose} open={open} currentUser={props.currentUser} isEmployer={props.isEmployer}/>
      </List>
  )
}

export default NotesList;