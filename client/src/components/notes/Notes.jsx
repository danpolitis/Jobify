import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MUIRichTextEditor from 'mui-rte';
import NotesList from "./NotesList.jsx";
import {Editor, EditorState} from 'draft-js';
import { convertFromRaw, convertToRaw } from 'draft-js';
import Button from '@mui/material/Button';
import 'regenerator-runtime/runtime'


function Notes(props) {
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState({})
  const [currentUser, setCurrentUser] = useState(3)
  const [isEmployer, setIsEmployer] = useState(true)
  const [body, setBody] = useState('')

  function getCurrentNotes() {
    if (isEmployer === true) {
      axios.get(`http://localhost:3000/employer_notes/${currentUser}`)
        .then((results) => {
          setNotes(results.data)
        })
    } else {
      axios.get(`http://localhost:3000/seeker_notes/${currentUser}`)
        .then((results) => {
          setNotes(results.data)
        })
    }
  }

  useEffect(() => {
    getCurrentNotes()
  }, [])

  // useEffect(() => {
  //   setCurrentNote(notes[0])
  // }, [notes])

  useEffect(() => {
    getCurrentNotes()
  }, [body])


  const save = (data) => {
    axios.put(`http://localhost:3000/employer_notes/${currentNote.id}`, {
      body: data,
      title: currentNote.title
    })
    .then(() => {
      getCurrentNotes()
    })
  }
  useEffect(() => {
    if (currentNote !== undefined) {
      if (currentNote.body !== null) {
        setBody(JSON.stringify(currentNote.body))
      }
    }
  }, [currentNote])

  if (currentNote === undefined) {
    return null
  }


  return (
    <Grid container>
      <Grid item md={3} style={{marginLeft: '14px'}}>
          <Typography variant='h4'>Add Notes</Typography>
          <NotesList currentUser={currentUser} isEmployer={isEmployer} notes={notes} setCurrentNote={setCurrentNote} getCurrentNotes={getCurrentNotes}/>
      </Grid>
      <Divider orientation="vertical" flexItem/>
      <Grid item md={8} style={{textAlign: 'left', paddingLeft: '20px'}}>
          <MUIRichTextEditor
            label="Write your notes here"
            onSave={save}
            defaultValue={body}
            inlineToolbar={true}
          />
      </Grid>
    </Grid>
  )
}

export default Notes;