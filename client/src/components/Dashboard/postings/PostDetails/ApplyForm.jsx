import React, {useState, useEffect} from "react"
import { Typography, Box, TextField, FormControlLabel, Button, Grid, Link, IconButton, Stack, InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import axios from "axios"
import { styled } from '@mui/material/styles';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Input = styled('input')({
  display: 'none',
});

function ApplyForm(props) {
  const [exp, setExp] = useState('');
  const [edu, setEdu] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(exp, edu, name, email, props.uid);
  };

  return (
    <Box noValidate sx={{ mt: 1 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Full Name"
          name="name"
          autoComplete="full name"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
          <FormControl sx={{width:"40%"}}>
            <InputLabel id="demo-simple-select-label">Experience</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={exp}
              label="Experience"
              onChange={(e) => setExp(e.target.value)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>10+</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{width:"40%"}}>
            <InputLabel id="demo-simple-select-label">Education</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={edu}
              label="Education"
              onChange={(e) => setEdu(e.target.value)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>10+</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
            Upload Resume
          </Button>
        </label>
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton color="primary" aria-label="upload resume" component="span">
            <AttachFileIcon />
          </IconButton>
        </label>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Apply
        </Button>
      </form>
    </Box>
  );
}

export default ApplyForm