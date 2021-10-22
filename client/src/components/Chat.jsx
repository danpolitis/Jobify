// Modal asking user to sign up for chat
//sends post request to chat endpoint creating user
//create route to deal with chat data
//add database info for username, firstname, lastname, password, chat signup status
//add react router endpoint
//add link in menu

import React, {useState, useEffect, useContext} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { GlobalContext } from './App.jsx';
import { ChatEngine } from 'react-chat-engine';

function Chat() {
  const [open, setOpen] = useState(true);
  const [page, setPage] = useState(1);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({})

  const[d, updateD] = useState(false);
  const globalState = useContext(GlobalContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changePage = () => {
    addUserDB()
    setPage(2)
  }

  const addToChatEngine = () => {
    handleClose()
    axios.post(`http://localhost:3000/chat/${globalState.state.userId}`, {
      username: username,
      secret: password,
      first_name: firstName,
      last_name: lastName
    })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    getUser()
  }, [page])

  const getUser = () => {
    axios.get(`http://localhost:3000/chat/${globalState.state.userId}`)
      .then((results) => {
        setUser(results.data.rows[0])
      })
  }
  const addUserDB = async () => {
    axios.put(`http://localhost:3000/chat/${globalState.state.userId}`, {
      username: username,
      first_name: firstName,
      last_name: lastName,
      password: password
    })
      .then(() => {
        updateD(!d)
        getUser()
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const dialog = () => {
    if (user.uuid !== undefined) {
      return (
        <ChatEngine
          publicKey={'908b0602-3660-43e8-bdb5-a0223c0a14ea'}
          userName={user.username}
          userSecret={user.password}
        />
      )
    } else {
      if (page === 1) {
        return (
          <Dialog open={open} onClose={handleClose}>
          <DialogTitle>User Information</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add in the details for your chat account
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Username"
              type="text"
              fullWidth
              variant="standard"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="First Name"
              type="text"
              fullWidth
              variant="standard"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={changePage}>Submit Information</Button>
          </DialogActions>
        </Dialog>
        )
      } else {
        return (
          <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Does this look right?
            </DialogContentText>
            <DialogContentText>
              Username: {username}
            </DialogContentText>
            <DialogContentText>
              First Name: {firstName}
            </DialogContentText>
            <DialogContentText>
              Last name: {lastName}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={addToChatEngine}>Sign Up</Button>
          </DialogActions>
        </Dialog>
        )
      }
    }
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign Up
      </Button>
      {dialog()}
    </div>
  );
}

export default Chat;