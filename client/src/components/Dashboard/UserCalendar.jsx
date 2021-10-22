import React, { useState, useEffect, useContext } from "react"
import { Button, Grid, Box, Typography, TextField, Checkbox, ListItemText, ListItemIcon, ListItemButton} from "@mui/material"
import { GlobalContext } from "../App.jsx"
import Calendar from 'react-calendar';
import axios from 'axios';
import './Calendar.css';
import uniqid from 'uniqid';
import ToDoListEntry from "./ToDoListEntry.jsx"
import moment from 'moment';









function UserCalendar(props) {

  const [employerPortal, setEmployerPortal] = useState("false")
  const [seekerPortal, setSeekerPortal] = useState("false")
  const [calDate, setCalDate] = useState(new Date())
  const [calDateView, setCalDateView] = useState(new Date())
  const [eventActivity, setEventActivity] = useState("")
  const [time, setTime] = useState('')
  const [toDoList, setToDoList] = useState([])
  const { state } = useContext(GlobalContext);
  const [listId, setListId] = useState("")

  useEffect(() => {
    getToDoList()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    axios.post(`http://localhost:3000/todo_list/${state.userId}`, {
      time: time,
      eventActivity: eventActivity,
      date: calDate
    }).then(resetInputs())
    .then(getToDoList())
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

  const calDateHandler = (val,e) => {
    setCalDateView(val)
    setCalDate(val)
  }

  function resetInputs() {
    setTime('')
    setEventActivity('')
  }


  const changeTime = (e) => {
    setTime(e.target.value)
    setCalDate((prev) => {
      let calDateString = prev.toLocaleString('en-US').slice(0,prev.toLocaleString('en-US').indexOf(','))
      let timeString = e.target.value
      let newDate = calDateString + ' ' + timeString + ':00'
      console.log('prevdate', calDateString)
      console.log('lolng', `${calDate.getFullYear()}-${(calDate.getMonth() + 1).toString().padStart(2,'0')}-${calDate.getDate()}`)
      return new Date(newDate)
    })
  }

  function convertTime(input) {
    return moment(input, 'HH:mm').format('h:mm A');
  }

  return (
    <div>
      <Grid container >
        <Box sx={{ marginTop: "102px" }}>
          <Calendar
            onChange={(val,e) => calDateHandler(val)}
            value={calDate} />
          <input value={time} style={{ marginTop: "45px", marginRight: "25px", padding: "15px 15px" }} onChange={changeTime} type="time" min="00:00" max="23:59" required />
          <TextField sx={{ marginTop: "45px" }} value={eventActivity} placeholder="Enter event name" onChange={e => setEventActivity(e.target.value)}></TextField>
          <p></p>
          <Button onClick={handleSubmit} color="primary" variant="contained">Add event to date</Button>
          <Box>
            <Typography align-content="left" variant="h5" sx={{marginTop: "20px", textDecoration: "underline" }} component="h5">Things to do on {calDate.toLocaleDateString()}</Typography>
            <p> </p>
              {toDoList && toDoList.filter(x => x.date !== null && x.date.slice(0,x.date.indexOf('T')) === calDateView.toISOString().slice(0,calDateView.toISOString().indexOf('T'))).map(item => (
                <ToDoListEntry key={uniqid()} getToDoList={getToDoList} item={item}/>
              ))}
          </Box>
        </Box>
      </Grid>
    </div>
  )
}


export default UserCalendar

