import React, {useState, useEffect} from "react"
import useFetch from "./Hooks/useFetch.jsx"
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';
import ApplyForm from "./ApplyForm.jsx"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function PostDetails(props) {
const [job, loading] = useFetch(`http://localhost:3000/postings/posting_id/${props.postId}`);
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

if (!job) {
    return <CircularProgress />
} else {
  return (
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
        {job.title}
      </Typography>
      <Stack direction="row" spacing={1}>
          <Chip color="primary" label={job.city} />
          <Chip color="secondary" label={job.field} />
        </Stack>

      <Typography
        variant="h4"
        color="text.primary"
        align="center"
        sx={{fontSize:"18px", textAlign:"left"}}
      >
        <strong>Pay:</strong> ${job.salary}
      </Typography>
      <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={handleOpen}>Apply</Button>
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
        {job.requirements}
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
        {job.benefits}
      </Typography>
      <Divider></Divider>
      <Typography
        variant="h3"
        color="text.primary"
        align="center"
        sx={{fontSize:"18px", textAlign:"left"}}
      >
        <strong>Job Description</strong>
      </Typography>
      <Typography
        variant="h4"
        color="text.primary"
        align="center"
        sx={{fontSize:"18px", textAlign:"left"}}
      >
        {job.description}
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
    )
  }
}

export default PostDetails