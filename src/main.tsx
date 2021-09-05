import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory 
} from "react-router-dom";
import './assests/css/index.css'
import App from './App'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
ReactDOM.render(
  
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <Switch>
        <Redirect exact strict from="/" to="/login" />
        <Route path="/login">
          <App />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
