import React, { useState, useEffect, useContext } from "react"
import {Button, Grid, Box,Typography, TextField, Checkbox, ListItemText, ListItemIcon} from "@mui/material"
import { GlobalContext } from "../App.jsx"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import './Calendar.css';
import uniqid from 'uniqid';









function UserCalendar(props) {

  const [employerPortal, setEmployerPortal] = useState("false")
  const [seekerPortal, setSeekerPortal] = useState("false")
  const [calDate, setCalDate] = useState(new Date())
  const [eventActivity, setEventActivity] = useState("")
  const [time, setTime] = useState('')
  const [toDoList, setToDoList] = useState([])
  const { state } = useContext(GlobalContext);

  useEffect(() => {
    getToDoList()
  },[time])

  const rawCalDate = calDate.toString()
  const sliceDate = rawCalDate.slice(3,10)

  function handleSubmit(e) {
    e.preventDefault()
    axios.post(`http://localhost:3000/todo_list/${state.userId}`, {
      time: time,
      eventActivity: eventActivity,
      date: sliceDate
    }).then(resetInputs())

    .catch(error => {
      console.log('error posting')
    })
  }

  // console.log(toDoList)

  function getToDoList() {
    axios.get(`http://localhost:3000/todo_list/${state.userId}`).then(response =>
      setToDoList(response.data.rows)
    ).catch(error => (
      console.log('error', error)
    ))
  }


  function resetInputs() {
    setTime('')
    setEventActivity('')
  }


  function deleteToDoList() {
    axios.delete(`http://localhost:3000/todo_list/${state.userId}`, {
      time: time,
      eventActivity: eventActivity,
      date: sliceDate
    }).then(resetInputs())
    .catch(error => {
      console.log('error posting')
    })
  }



  return (
    <div>
      <Grid container >
        <Box sx={{marginTop: "90px"}}>
          <Calendar
            onChange={setCalDate}
            value={calDate}/>
          <input value={time} style={{marginTop: "45px", marginRight: "25px", padding: "15px 15px"}} onChange={e => setTime(e.target.value)} type="time" min="09:00" max="18:00" required/>
          <TextField sx={{marginTop: "45px"}} value={eventActivity} placeholder="Enter event name" onChange={e => setEventActivity(e.target.value)}></TextField>
          <p></p>
          <Button onClick={handleSubmit} color="primary" variant="contained">Add event to date</Button>
          <Box>
            <Typography align-content="left" variant="h5" sx={{marginTop: "20px", textDecoration: "underline"}} component="h5">Things to do Today</Typography>
            <ul className="checkmark">
                {toDoList && toDoList.map(item => (
              <div key={uniqid()}>
                  <li>{item.time} - {item.eventactivity}</li>
              </div>
                ))}
            </ul>
          </Box>
        </Box>
      </Grid>
    </div>
  )
}


export default UserCalendar