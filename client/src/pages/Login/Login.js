import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Field from '../../components/Field'
import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
    message: '',
    loggedIn: false
  };
  
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    this.props.login(username, password)
    this.setState({
      loggedIn: true
    })
  }

  render() {
    const { username, password, message, loggedIn } = this.state;
    if (loggedIn) {
      return (
        <Redirect to='/dash'/>
      )
    }
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div className="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
          <h2 className="form-signin-heading">Please Login</h2>
          <Field
            label='username'
            value={this.state.username}
            handleChange={this.onChange}
          />
          <Field
            label='password'
            value={this.state.password}
            handleChange={this.onChange}
            type="password"
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          <p>
            Not a member? <Link to="/signup"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Sign Up here</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;