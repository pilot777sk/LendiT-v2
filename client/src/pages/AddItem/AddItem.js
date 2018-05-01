import React, {Component} from "react";
import Field from '../../components/Field'
import "./AddItem.css";
import {Redirect} from 'react-router-dom'

class AddItem extends Component{
  state = {
    name: "",
    price: "",
    description: "",
    image: "",
    owner: "",
    location: "",
    email: "",
    phone: "",
    submitted: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    // equivalent to:
    // const name = event.target.name;
    // const value = event.target.value;
    this.setState({
      [name]: value
    });
    // [name] will get the value of the const name
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true
    }) 
  }


  render(){
    if (this.state.submitted) {
      const query = `?name=${this.state.name}&image=${this.state.image}&price=${this.state.price}&description=${this.state.description}`
      return (
        <Redirect to={{
          pathname: '/preview',
          search: query
        }}/>
      )
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Field
            label='name'
            value={this.state.name}
            handleChange={this.handleInputChange}
          />
          <Field
            label='price'
            value={this.state.price}
            handleChange={this.handleInputChange}
          />
          <Field
            label='description'
            value={this.state.description}
            handleChange={this.handleInputChange}
          />
          <Field 
            label='image'
            value={this.state.image}
            handleChange={this.handleInputChange}
          />
         <Field 
            label='owner'
            value={this.state.owner}
            handleChange={this.handleInputChange}
          />
          <Field 
            label='location'
            value={this.state.location}
            handleChange={this.handleInputChange}
          />
          <Field 
            label='email'
            value={this.state.email}
            handleChange={this.handleInputChange}
          />
          <Field 
            label='phone'
            value={this.state.phone}
            handleChange={this.handleInputChange}
          />
          <button className="btn btn-primary" type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddItem;