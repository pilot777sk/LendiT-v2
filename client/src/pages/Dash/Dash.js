import React, {Component} from "react";
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
      <div>
        <ul>
          {items.map( (item) => (
            <li>
              <img src={item.image}/>
              <div> {item.name} </div>
              <div> {item.description} </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Dash;