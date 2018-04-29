import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {Image, Button} from 'react-bootstrap';
import './Dash.css';
import {parse} from 'query-string';


class Dash extends Component{
  state = {
    listings: []
  }
  searchByName = (searchQuery) => {
    axios.post('/api/items/search', searchQuery)
        .then(response => {
          this.setState({
            listings: response.data
          })
        }) 

  }
  getAllListings = () => {
    axios.get('/api/items/allItems')
        .then(response => {
          this.setState({
            listings: response.data
          })
        })
    
  }
  componentDidMount(){
    if (this.props.location.search){
      this.searchByName(this.props.location.search);
      
    } else{
      this.getAllListings();
    }
  }
  componentWillReceiveProps(){
    if (this.props.location.search){
      this.searchByName(this.props.location.search);
      
    } else{
      this.getAllListings();
    }
  }
  render(){
    console.log(this.props)
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
                {this.state.listings.map( (item) => (
                  <li key={item._id}>
                    <Link to={`/listing/${item._id}`}>
                      <div><img className='itemImage' src={item.image}/></div>
                      <div> {item.name} </div>
                      <div> {item.description} </div>
                    </Link>
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