import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import './Signup.css';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    signedUp: false
  };
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    this.props.signup(username, password)
  }

  render() {
    const { username, password } = this.state;
    if (this.state.signedUp) {
      return (
        <Redirect to='/dash'/>
      )
    }
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Sign Up</h2>
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" className="form-control" placeholder="Email address" name="username" value={username} onChange={this.onChange} required/>
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;


