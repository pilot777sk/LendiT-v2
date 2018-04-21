import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'



import {Navbar} from "./components/Navbar"


class App extends Component {
  render() {
    return (
      
      <Router>
        <div> 
          <Navbar />
         
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </div>
        
      </Router>
    );
  }
}

export default App;
