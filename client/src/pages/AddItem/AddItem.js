import React, {Component} from "react";
import Field from '../../components/Field'
import Preview from '../../components/Preview'
import "./AddItem.css";


class AddItem extends Component{
  state = {
    name: "",
    price: "",
    description: "",
    image: "",
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
      return <Preview listingValues={this.state} />
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
          <button className="btn btn-primary" type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddItem;