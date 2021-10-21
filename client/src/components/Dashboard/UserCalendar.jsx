import React, { useState, useEffect, useContext } from "react"
import Calendar from 'react-calendar'
import './Calendar.css';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from 'axios';
import { GlobalContext } from "../App.jsx"
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";










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
  },[])

  function handleSubmit() {
    axios.post(`/todo_list/${state.userId}`, {
      time: time,
      eventactivity: eventActivity,
      date: calDate.slice(0,10)
    }).then(resetInputs())
    .catch(error => {
      console.log('error posting')
    })
  }

  // console.log(toDoList)

  function getToDoList() {
    axios.get(`/todo_list/${state.userId}`).then(response =>
      setToDoList(response.data)
    ).catch(error => (
      console.log('error', error)
    ))
  }


  function resetInputs() {
    setTime('')
    setEventActivity('')
  }

  function CheckboxList() {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };
  }



  return (
    <div>
      <Grid container >
        <Box sx={{marginTop: "102px"}}>
          <Calendar
            onChange={setCalDate}
            value={calDate}/>
          <input value={time} style={{marginTop: "45px", marginRight: "25px", padding: "15px 15px"}} onChange={e => setTime(e.target.value)} type="time" min="09:00" max="18:00" required/>
          <TextField sx={{marginTop: "45px"}} placeholder="Enter event name" onChange={e => setEventActivity(e.target.value)}></TextField>
          <p></p>
          <Button color="primary" variant="contained">Add event to date</Button>
          <Box>
            <Typography align-content="left" variant="h5" sx={{marginTop: "20px", textDecoration: "underline"}} component="h5">Things to do Today</Typography>
            <ul className="checkmark">
              <li className="checkmark">
                hello22
              </li>
              <li>
                {/* {toDoList && toDoList.map(item => (
                  item.time, item.eventactivity
                ))} */}
              </li>
            </ul>
          </Box>
        </Box>
      </Grid>
    </div>
  )
}


export default UserCalendar