import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'

function Email(props) {
  const [open, setOpen] = useState(false);
  const [contactEmail, setContactEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleClose();
    sendEmail();
  }

  const sendEmail = () => {
    axios.post('http://localhost:3000/email', {
      subject: 'Jobify Message from DanInc',
      message: `This message is a no-reply. Please get in contact with the employer using this email: ${contactEmail} \n\n ${message}`
    })
  }

  return (
    <div>
    <Button variant="contained" onClick={handleClickOpen}>
      {props.name}
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Send Email</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Input an email address you would like the applicant to reach out to you on.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          required
          onChange={(e) => setContactEmail(e.target.value)}
        />
        <DialogContentText >
          Input your message.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="message"
          label="Message"
          type="text"
          fullWidth
          variant="standard"
          multiline
          rows={10}
          required
          onChange={(e) => setMessage(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Send Email</Button>
      </DialogActions>
    </Dialog>
  </div>
  )

}

export default Email;