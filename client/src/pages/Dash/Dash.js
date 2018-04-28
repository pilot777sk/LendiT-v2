import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Image, Button} from 'react-bootstrap';
import './Dash.css';
const items = [
  {
    "id": 1,
    "name": "step ladder",
    "item size": "12 foot",
    "description": "clean, fiberglass",
    "image": "https://images.craigslist.org/00F0F_gOxJjTk8eUE_600x450.jpg",
    "owner": "Bismack Biyombo",
    "location": "400 West Church Street Suite 200 Orlando, Florida 32801",
    "email": "bismack.biyombo@cityoforlando.net",
    "phone": "407-440-7900",
    "rating": ""

},

{
  "id": 2,
  "name": "AIR COMPRESSOR",
  "item size": "8 gal 2hp",
  "description": "clean, on wheels",
  "image": "https://images.craigslist.org/00404_5QgLkXlKOPE_600x450.jpg",
  "owner": "Marsha Mellow",
  "location": "2490 Colomba Rd Orlando, Florida 32801",
  "email": "Marsha.Mellow@Orlando.net",
  "phone": "(772) 224-6015",
  "rating": ""

}

]

class Dash extends Component{

  render(){
    return (
      <div className='container'>
        <div className="row">
            <div className=" col-md 12">
              <div className='addButton'>       
              <Link to = 'addItem' className="btn btn-primary" >Add New Item</Link>
              </div>
            </div>
          </div>
          <div className="row">  
            <div className=" col-md 12" className='inline-block'>
              <ul>
                {items.map( (item) => (
                  <li>
                    <div><img className='itemImage' src={item.image}/></div>
                    <div> {item.name} </div>
                    <div> {item.description} </div>
                  </li>
                ))}
              </ul>
            </div>  
          </div>        
      </div>
    )
  }
}

export default Dash;