import React, { useState, useContext } from "react"
import { Grid, Typography, CircularProgress, Stack, Divider, Chip, Box, Button, Modal, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { pink } from "@mui/material/colors";
import useFetch from "../hooks/useFetch.jsx"
import ApplyForm from "./ApplyForm.jsx"
import { GlobalContext } from '../../../App.jsx';

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

function PostDetails({ postId }) {
  const job = useFetch(`http://localhost:3000/postings/posting_id/${postId}`);
  const [open, setOpen] = useState(false);
  const [fav, setFav] = useState(false);
  const handleFav = () => setFav(true);
  const handleCloseFav= () => setFav(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const globalData = useContext(GlobalContext);
  const uid = globalData.state.userId;

  return (
    !job
    ? <CircularProgress />
    : <>
        <Stack
          spacing={{xs: 3}}
          sx={{border:"1px solid rgba(0, 0, 0, 0.12)", borderRadius: "2px", padding:"10px" }}
        >
          <Typography variant="body2" color="text.secondary" sx={{textAlign:"left"}}>
          {`Posted On: ${new Date(job.posted_date).toLocaleDateString('en-US')}`}
        </Typography>
          <Typography
            variant="h4"
            align="center"
            sx={{fontWeight:"700", textAlign:"left", marginTop:"15px", color:"#49475B" }}
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
            sx={{fontSize:"18px", textAlign:"left", color:"#49475B" }}
          >
            <strong>Salary:</strong> {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(job.salary)}
          </Typography>
          <Stack direction="row" spacing={2}>
            {!uid
              ? <Button variant="contained" href="/signin">Apply</Button>
              : <Button variant="contained" onClick={handleOpen}>Apply</Button>
            }
            <label htmlFor="icon-button-file">
              {/* <Input accept="image/*" id="icon-button-file" type="file" /> */}
              {!fav
                  ?<IconButton onClick={handleFav} sx={{ color: pink[500] }} aria-label="favourite" component="span">
                    <FavoriteBorderIcon />
                  </IconButton>
                  : <IconButton  onClick={handleCloseFav} sx={{ color: pink[500] }} aria-label="unfav" component="span">
                      <FavoriteIcon />
                    </IconButton>
              }
            </label>
          </Stack>
          <Divider></Divider>
          <Typography
            variant="h3"
            // color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left", color:"#49475B" }}
          >
            <strong>Qualifications</strong>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{textAlign:"left"}}
          >
            {job.requirements}
          </Typography>
          <Divider></Divider>
          <Typography
            variant="h3"
            // color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left", color:"#49475B" }}
          >
            <strong>Benefits</strong>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{textAlign:"left", color:"#49475B" }}
          >
            {job.benefits}
          </Typography>
          <Divider></Divider>
          <Typography
            variant="h3"
            // color="text.primary"
            align="center"
            sx={{fontSize:"18px", textAlign:"left", color:"#49475B" }}
          >
            <strong>Job Description</strong>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{textAlign:"left"}}
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
            <ApplyForm uid = {uid} postId = {postId}/>
          </Box>
        </Modal>
      </>
  )
}

export default PostDetails