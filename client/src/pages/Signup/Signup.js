import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Signup.css';

import Field from '../../components/Field'

class Signup extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    phone: '',
    email: '',
    location: '',
    signedUp: false
  };
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password, owner, phone, email, location } = this.state;

    this.props.signup(username, password, owner, phone, email, location)
    this.setState({
      signedUp: true
    })
  }

  render() {
    const { username, password, owner, phone, email, location, signedUp } = this.state;
    if (signedUp) {
      return (
        <Redirect to='/dash'/>
      )
    }
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Sign Up</h2>
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
          <Field
            label='name'
            value={this.state.name}
            handleChange={this.onChange}
          />
          <Field
            label='phone'
            value={this.state.phone}
            handleChange={this.onChange}
          />
          <Field
            label='email'
            value={this.state.email}
            handleChange={this.onChange}
            type="email"
          />
          <Field
            label='location'
            value={this.state.location}
            handleChange={this.onChange}
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;


