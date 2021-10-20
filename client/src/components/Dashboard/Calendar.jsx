import React, { useState, useEffect } from "react"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from 'axios';







function Dashboard(props) {

  const [employerPortal, setEmployerPortal] = useState("false")
  const [seekerPortal, setSeekerPortal] = useState("false")
  //set states of calendar date
  const [calDate, setCalDate] = useState(new Date())
  const [eventActivity, setEventActivity] = useState("")
  const [time, setTime] = useState('')
  const [toDoList, setToDoList] = useState([])


  // useEffect(() => {

  // },[])


  // function onChange1(calDate) {
  //   //change results based on calendar date click
  //   setCalDate(calDate)
  //   const filteredResults = userResults.filter(result => {
  //     const newResultFormat = new Date(result.created_at).toLocaleString().split(",")[0]
  //     const newCalDateFormat = calDate.toLocaleString().split(",")[0]
  //     return newResultFormat === newCalDateFormat
  //   })
  // }




  useEffect(() => {
    getToDoList()
  },[0])

  function handleSubmit() {
    axios.post('/todo_list', {
      time: time,
      eventActivity: eventActivity
    }).then(resetInputs())
    .catch(error => {
      console.log('error posting')
    })
  }

  console.log(toDoList)

  function getToDoList() {
    axios.get('/todo_list').then((response =>
      setToDoList(response.rows)
    ))
  }


  function resetInputs() {
    setTime('')
    setEventActivity('')
  }


  return (
    <div>
      <Grid container justifyContent="flex-end" sx={{ marginLeft: "10px"}}>
        <Box sx={{ p: 2 }}>
          <Calendar
            onChange={setCalDate}
            value={calDate}
            sx={{marginLeft: "150px"}} />
          <input value={time} onChange={e => setTime(e.target.value)} type="time" min="09:00" max="18:00" required/>
          <TextField sx={{marginLeft: "10px"}} placeholder="Enter event name" onChange={e => setEventActivity(e.target.value)}></TextField>
          <p></p>
          <Button sx={{ marginTop: "10px" }} color="primary" variant="contained">Add event to date</Button>
          <Box>
            <Typography sx={{ padding: "7px" }} align-content="left" variant="h5" component="h5">Things to do Today</Typography>
            <ul>
              <li>
                hello
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


export default Dashboard