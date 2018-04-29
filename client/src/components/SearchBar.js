import React, {Component} from "react";
import {Redirect} from 'react-router-dom';

class SearchBar extends Component{
  state = {
    name: ""
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
    this.props.history.push(`/dash?name=${this.state.name}`)
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit} className="navbar-form navbar-left">
        <div className="form-group">
          <input name='name' value={this.state.name} onChange={this.handleInputChange}type="text" className="form-control" placeholder="Search" />
          {/* <input type="text" className="form-control" placeholder="Location" /> */}
        </div>
        <button type="submit" className="btn btn-default">Search</button>
      </form>
    )
  }
}

export default SearchBar;