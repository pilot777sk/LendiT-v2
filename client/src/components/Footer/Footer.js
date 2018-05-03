import React from "react"
import "./Footer.css";
import {Link, withRouter} from "react-router-dom"

const Footer = (props) => (
<div className="navbar navbar-default navbar-bottom">
      <p className="text">Created by Steve Krauss &copy; Copyright 2018 </p>
</div>
)

export default withRouter(Footer);