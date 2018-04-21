import React from "react"
import "./Navbar.css";

export const Navbar = ()=> (
  <nav className="navbar navbar-default">
  
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" className="logo" href="/"><img src={'assets/Lendit_logo.png'}  alt='yes' height="50" /></a>
    </div>
    
    
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        
        <li><a href="/about">About</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Sign up</a></li>
      </ul>
      <form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
          <input type="text" className="form-control" placeholder="Location" />
        </div>
        <button type="submit" className="btn btn-default">Search</button>
      </form>
      
    </div>
    
  </div>
</nav> 
)