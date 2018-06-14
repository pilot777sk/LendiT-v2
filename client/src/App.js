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
import Footer from "./components/Footer"
import AddItem from './pages/AddItem';
import Preview from './pages/Preview';
import Success from './pages/Success';
import axios from 'axios';


class App extends Component {
  state = {
    authenticated: false,
    user: {}
  }
  signup = (username, password, name, phone, email, location) => {
    axios.post('/api/auth/signup', { username, password, name, phone, email, location })
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
      })
      .catch(error => {
        console.log(error);
      });
  }
  login = (username, password) => {
    axios.post('/api/auth/login', { username, password })
      .then((response) => {
        const { user } = response.data
        this.setState({
          authenticated: true,
          user
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  logout = () => {
    this.setState({
     authenticated: false,
     user: {}
    })
  }

  render() {
    console.log(this.props);
    return (
      
      <Router>
        <div className="appBody"> 
          <Navbar auth={this.state.authenticated} logout={this.logout}/>
          
         
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/login' render={props => <Login login={this.login} {...props}/> } />
          <Route path='/signup' render={props => <Signup signup={this.signup} {...props}/> } />
          <Route path='/dash' component={Dash} />
          <Route path='/addItem' render={props => <AddItem user={this.state.user} {...props}/> } />
          <Route path='/listing/:id' component={ListingContainer} />
          <Route path='/preview' component={Preview} />
          <Route path='/success' component={Success} />
          
          <Footer />
        </div>
        
      </Router>
    );
  }
}

export default App;
