import React, { useState, useContext } from 'react';
import { Grid, Typography, Stack, Divider, Box, Button, Modal, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import Email from "../../../Email.jsx"
import { GlobalContext } from '../../../App.jsx';


export default Applicant = ({ applicantInfo }) => {
  // detailed entry of each applicant
  // contact and reject buttons

  return (
    <Grid item xs={7}>
      <>
        <Stack
          spacing={{xs: 3}}
        >
          <Typography
            variant="h4"
            color="text.primary"
            align="center"
            sx={{fontWeight:"700", textAlign:"left"}}
          >
            {applicantInfo.name}
          </Typography>
          <Typography
            variant="h4"
            color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left"}}
          >
            {applicantInfo.email}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Email name='Contact' email={applicantInfo.email} />
            <Email name='Reject' email={applicantInfo.email} />
            <label htmlFor="icon-button-file">
              {/* <Input accept="image/*" id="icon-button-file" type="file" /> */}
              <IconButton sx={{ color: pink[500] }} aria-label="upload picture" component="span">
                <FavoriteIcon />
              </IconButton>
            </label>
          </Stack>
          <Typography
            variant="h3"
            color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left"}}
          >
            <strong>Experience</strong>
          </Typography>
          <Typography
            variant="h4"
            color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left"}}
          >
            {applicantInfo.years_exp}
          </Typography>
          <Typography
            variant="h3"
            color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left"}}
          >
            <strong>Education</strong>
          </Typography>
          <Typography
            variant="h4"
            color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left"}}
          >
            {applicantInfo.years_edu}
          </Typography>
        </Stack>
      </>
    </Grid>
  )
};