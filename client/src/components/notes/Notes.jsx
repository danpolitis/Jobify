import React, { useState, useEffect, useContext } from 'react';
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
import { GlobalContext } from '../App.jsx';


function Notes(props) {
  const globalState = useContext(GlobalContext);
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState({})
  const [currentUser, setCurrentUser] = useState(globalState.state.userId)
  const [isEmployer, setIsEmployer] = useState('employer')
  const [body, setBody] = useState('')


  function getCurrentNotes() {
    if (isEmployer === 'employer') {
      axios.get(`http://localhost:3000/employer_notes/${currentUser}`)
        .then((results) => {
          setNotes(results.data)
        })
        .catch((err) => {console.log(err)})
    } else {
      axios.get(`http://localhost:3000/seeker_notes/${currentUser}`)
        .then((results) => {
          setNotes(results.data)
        })
        .catch((err) => {console.log(err)})
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
    if (isEmployer === 'employer') {
      axios.put(`http://localhost:3000/employer_notes/${currentNote.id}`, {
        body: data,
        title: currentNote.title
      })
      .then(() => {
        getCurrentNotes()
      })
    } else {
      axios.put(`http://localhost:3000/seeker_notes/${currentNote.id}`, {
        body: data,
        title: currentNote.title
      })
      .then(() => {
        getCurrentNotes()
      })
    }
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
    <Container>
    <Grid container>
      <Grid item md={3} style={{marginLeft: '14px'}}>
          <Typography sx={{color: "#EFEFEF"}} variant='h4'>Add Notes</Typography>
          <NotesList currentUser={currentUser} isEmployer={isEmployer} notes={notes} setCurrentNote={setCurrentNote} getCurrentNotes={getCurrentNotes}/>
      </Grid>
      <Divider orientation="vertical" flexItem/>
      <Grid item md={8} style={{color: "#EFEFEF", textAlign: 'left', paddingLeft: '20px'}}>
          <MUIRichTextEditor
            sx={{color: "#EFEFEF"}}
            label="Write your notes here"
            onSave={save}
            defaultValue={body}
            inlineToolbar={true}
          />
      </Grid>
    </Grid>
    </Container>
  )
}

export default Notes;