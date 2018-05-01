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
import Navbar from "./components/Navbar"
import AddItem from './pages/AddItem';
import Preview from './pages/Preview';
import Success from './pages/Success';
import axios from 'axios';


class App extends Component {
  state = {
    authenticated: false,
  }
  signup = (username, password) => {
    axios.post('/api/auth/signup', { username, password })
      .then(response => {
        console.log(response.data);
        if(response.data.success || response.data.msg === "Username already exists.") {
          axios.post('/api/auth/login',{username, password})
            .then(response => {
              this.setState({
                authenticated: true
              })
            }) 
            .catch(error => {
              console.log(error);
            }) 
        }
      });
  }
  login = (username, password) => {
    axios.post('/api/auth/login', { username, password })
      .then((result) => {
        this.props.history.push('/dash')
        this.setState({
          authenticated: true
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      
      <Router>
        <div> 
          <Navbar auth={this.state.authenticated}/>
         
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' render={props => <Login login={this.login} {...props}/> } />
          <Route path='/signup' render={props => <Signup signup={this.signup} {...props}/> } />
          <Route path='/dash' component={Dash} />
          <Route path='/addItem' component={AddItem} />
          <Route path='/listing/:id' component={ListingContainer} />
          <Route path='/preview' component={Preview} />
          <Route path='/success' component={Success} />
          
        </div>
        
      </Router>
    );
  }
}

export default App;
