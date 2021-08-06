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
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/home" component={Home}/>


      </Router>
      {/* <Signup/>
      <Login/> */}
</div>
  );
}

export default App;
