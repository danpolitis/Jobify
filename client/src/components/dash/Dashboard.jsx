import React, { useReducer, useState, createContext, useContext, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import Postings from "./postings/Postings.jsx";
import UserCalendar from "./UserCalendar.jsx";
import DashboardAlerts from './DashboardAlerts.jsx';
import { GlobalContext } from "../App.jsx"
import axios from 'axios';

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

function Dashboard({ location }) {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { id } = useParams();

  const globalData = useContext(GlobalContext)

  const getRole = () => {
    axios.get(`http://localhost:3000/signup_login/${state.userId}`)
      .then((results) => {
        console.log(results)
        globalData.dispatch({ type: 'updateRole', data: results.data.rows[0].role})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getRole()
  }, [])

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