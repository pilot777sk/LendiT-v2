import React from "react"
import "./Navbar.css";
import {Link, withRouter} from "react-router-dom"
import SearchBar from '../SearchBar'
import { Button } from "react-bootstrap";

const Navbar = (props) => (
  <nav className="navbar navbar-default">
  
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" className="logo" href="/"><img src={'/assets/Lendit_logo.png'}  alt='yes' height="50" /></a>
    </div>
    
    
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/dash"> Dashboard</Link></li>
      </ul>
      
      <SearchBar history={props.history}/>
      {props.auth && <Button className="btn navbar-btn navbar-right">Logout</Button>}    
    </div>
    
  </div>
</nav> 
)

export default withRouter(Navbar);