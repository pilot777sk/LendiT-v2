import React from 'react';
import {Image, Modal, Button} from 'react-bootstrap';
import {Link, Route} from "react-router-dom";

//https://images.craigslist.org/00F0F_gOxJjTk8eUE_600x450.jpg

const Listing = ({name='name', image='http://via.placeholder.com/350x150', price='price', description='description', owner='owner', location='location', email='email', phone='phone'}) => (
  <div>
    <h2>Name: {name}</h2>
    <Image
      src={image} style={{height: 100, width: null}}
    />
    <h2>Price: {price}</h2>
    <h2>Description: {description}</h2>
    <h2>Owner: {owner}</h2>
    <h2>Location: {location}</h2>
    <h2>Email: {email}</h2>
    <h2>Phone: {phone}</h2>
  </div>
)

export default Listing;
