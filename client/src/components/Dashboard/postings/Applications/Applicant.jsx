import React, { useState } from 'react';
import { Grid, Typography, Stack, Divider, Box, Button, Modal, IconButton } from "@mui/material";

export default Applicant = ({ applicantInfo }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // detailed entry of each applicant
  // contact and reject buttons
  return (
    <Grid item xs={7} sx={{border: "1px solid rgba(0, 0, 0, 0.12)"}}>
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
            <Button variant="contained" onClick={handleOpen}>Contact</Button>
            <label htmlFor="icon-button-file">
              {/* <Input accept="image/*" id="icon-button-file" type="file" /> */}
              <IconButton sx={{ color: pink[500] }} aria-label="upload picture" component="span">
                <FavoriteIcon />
              </IconButton>
            </label>
          </Stack>
          <Divider></Divider>
          <Typography
            variant="h3"
            color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left"}}
          >
            <strong>Qualifications</strong>
          </Typography>
          <Typography
            variant="h4"
            color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left"}}
          >
            {applicantInfo.requirements}
          </Typography>
          <Divider></Divider>
          <Typography
            variant="h3"
            color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left"}}
          >
            <strong>Benifits</strong>
          </Typography>
          <Typography
            variant="h4"
            color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left"}}
          >
            {applicantInfo.benefits}
          </Typography>
          <Divider></Divider>
          <Typography
            variant="h3"
            color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left"}}
          >
            <strong>applicantInfo Description</strong>
          </Typography>
          <Typography
            variant="h4"
            color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left"}}
          >
            {applicantInfo.description}
          </Typography>
        </Stack>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Apply For The Position
            </Typography>
            <ApplyForm />
          </Box>
        </Modal>
      </>
    </Grid>
  )
};