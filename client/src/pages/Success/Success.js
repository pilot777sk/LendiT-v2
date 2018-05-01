import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './Success.css';

class Success extends Component{

  render(){
    return (
      <div className="success">
      <div className="row">
        <div className="col-md-4"></div>
          <div className="col-md-4">
            <h2> Success </h2>
            <Link className="btn btn-primary" to='/addItem'>Add another Item</Link>
            <span> </span>
            <Link className="btn btn-primary" to='/dash'>Return</Link>
          </div>
          <div className="col-md-4"></div>
      </div>
      </div>    
    )
  }
}

export default Success;
