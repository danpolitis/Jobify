import React from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function CreateNote(props) {

  function handleAddNote(e) {
    e.preventDefault();
    if (props.isEmployer === true){
      console.log(e.target.text.value)
      axios.post(`http://localhost:3000/employer_notes/${props.currentUser}`, {
        title: e.target.text.value
      })
    } else {
      // axios.post(`http://localhost:3000/employer_notes/${props.currentUser}`)
    }
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
    >
      <Box sx={style}>
        <form onSubmit={handleAddNote}>
          <Typography variant="h6" align='center'>Name your note</Typography>
          <TextField id="text" label="Title" variant="outlined" />
          <Button type='submit' style={{height: '53px'}} variant="contained">Add Note</Button>
        </form>
      </Box>
    </Modal>
  )
}

export default CreateNote;