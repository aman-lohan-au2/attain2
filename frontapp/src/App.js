import './App.css';
import React from 'react'
import Signup from './component/signUp';
import Login from './component/login';
import Home from './component/home'

import { Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <Route exact path="/login" render={(props) => <Login {...props}  />} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/" render={(props) => <Home  {...props}  />} />


      </Router>
      {/* <Signup /> */}
      {/* <Login id="LoginId"/> */}
</div>
  );
}

export default App;
