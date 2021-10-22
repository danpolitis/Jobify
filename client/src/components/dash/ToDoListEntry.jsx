import React from 'react'
import { Button, Grid, Box, Typography, TextField, Checkbox, ListItemText, ListItemIcon, ListItemButton} from "@mui/material"
import axios from 'axios'
import './Calendar.css';
import moment from 'moment';

export default function ToDoListEntry(props) {


  function handleDelete(e) {
    axios.delete(`http://localhost:3000/todo_list/list_id/${props.item.id}`, {
    }).then(() => props.getToDoList())
      .catch(error => {
        console.log('error deleting')
      })
  }

  function convert(input) {
    return moment(input, 'HH:mm').format('h:mm A');
  }

  return (
      <ListItemButton
        onClick={handleDelete}
        className="toDoClass"
      > {convert(props.item.time)} - {props.item.eventactivity}
      </ListItemButton>
  )
}
