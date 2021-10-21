import React from "react"
import { Typography, Box, TextField, FormControlLabel, Button, Grid, Link, IconButton } from "@mui/material";
import axios from "axios"
import { styled } from '@mui/material/styles';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Input = styled('input')({
  display: 'none',
});

function ApplyForm(props) {
  return (
<Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
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
          </Box>
  );
}

export default ApplyForm