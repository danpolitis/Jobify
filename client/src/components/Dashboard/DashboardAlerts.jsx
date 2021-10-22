import React, { useContext } from 'react';
import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { DashboardContext } from './Dashboard.jsx';

export default Alerts = () => {
  const { dashboardState, dashboardDispatch } = useContext(DashboardContext);

  return (
    <>
      <Collapse in={dashboardState.addedJob}>
        <Alert
          severity="success"
          sx={{ mt: '8px' }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dashboardDispatch({ type: 'addedJob', data: false })
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          A new job has been posted!
        </Alert>
      </Collapse>
      <Collapse in={dashboardState.removePost}>
        <Alert
          severity="success"
          sx={{ mt: '8px' }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dashboardDispatch({ type: 'removePost', data: false })
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Job posting has been removed from public listing!
        </Alert>
      </Collapse>
      <Collapse in={dashboardState.renewedPost}>
        <Alert
          severity="success"
          sx={{ mt: '8px' }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dashboardDispatch({ type: 'renewedPost', data: false })
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Job posting has been re-added to public listings!
        </Alert>
      </Collapse>
      <Collapse in={dashboardState.rejectApplicant}>
        <Alert
          severity="success"
          sx={{ mt: '8px' }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dashboardDispatch({ type: 'rejectApplicant', data: false })
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Applicant has been rejected!
        </Alert>
      </Collapse>
    </>
  )
}