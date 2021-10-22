import React, { useReducer, useState, createContext } from "react";
import { useParams } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import Postings from "./postings/Postings.jsx";
import UserCalendar from "./UserCalendar.jsx";
import DashboardAlerts from './DashboardAlerts.jsx';

export const DashboardContext = createContext();

const initialState = {
  addedJob: false,
  removePost: false,
  renewedPost: false,
  rejectApplicant: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'removePost':
      return { ...state, removePost: action.data};
    case 'renewedPost':
      return {...state, renewedPost: action.data};
    case 'rejectApplicant':
      return { ...state, rejectApplicant: action.data};
    default:
      return state;
  }
};

function Dashboard({ location }) {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { id } = useParams();

  return (
    <DashboardContext.Provider value={{ dashboardState: state, dashboardDispatch: dispatch }}>
      <Container>
        <DashboardAlerts />
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Postings pid = {id} search={location.state} />
          </Grid>
          <Grid item xs={3}>
            <UserCalendar/>
          </Grid>
        </Grid>
      </Container>
    </DashboardContext.Provider>
  );
}

export default Dashboard