import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';
import './App.css';
import Theme from "./Theme";
import AppRoutes from "./AppRoutes";
import Content from "../common/Content";
import Header from "../common/Header";

const App = (props) => {

  console.log("================================== App ======================================");

  // Build App
  let view = (
      <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={Theme}>
              <Router basename="/">
                  <Header></Header>
                  <Content>
                      <AppRoutes />
                  </Content>
              </Router>
          </ThemeProvider>
      </React.Fragment>
  )

  // Return View
  return view
}

export default App;
