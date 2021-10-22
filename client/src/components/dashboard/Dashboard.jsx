import React, { useReducer, createContext } from "react";
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
    case 'addedJob':
      return {...state, addedJob: action.data};
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

function Dashboard() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <DashboardContext.Provider value={{ dashboardState: state, dashboardDispatch: dispatch }}>
      <Container>
        <DashboardAlerts />
        <Grid container spacing={2} sx={{ margin: "1% 0" }}>
          <Grid item xs={9}>
            <Postings />
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