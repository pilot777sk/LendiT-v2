import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dash from './pages/Dash'
import ListingContainer from './pages/ListingContainer'




import {Navbar} from "./components/Navbar"
import AddItem from './pages/AddItem';
import Preview from './pages/Preview';


class App extends Component {
  render() {
    return (
      
      <Router>
        <div> 
          <Navbar />
         
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/dash' component={Dash} />
          <Route path='/addItem' component={AddItem} />
          <Route path='/listing' component={ListingContainer} />
          <Route path='/preview' component={Preview} />
        </div>
        
      </Router>
    );
  }
}

export default App;
