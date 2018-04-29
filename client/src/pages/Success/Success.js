import React, {Component} from "react";
import {Link} from 'react-router-dom';


class Success extends Component{

  render(){
    return (
      <div>
        <h2> Success </h2>
        <Link to='/addItem'>Add another Item</Link>
        <Link to='/dash'>Return</Link>
      </div>
    )
  }
}

export default Success;
