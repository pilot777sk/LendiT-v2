import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {Image, Button} from 'react-bootstrap';
import './Dash.css';
import {parse} from 'query-string';


class Dash extends Component{
  state = {
    query: '',
    listings: []
  }
  searchByName = (searchQuery) => {
    axios.post('/api/items/search', searchQuery)
        .then(response => {
          console.log(response);
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
  componentWillUnmount() {
    this.unlisten();
  }
  componentDidMount(){
    if (this.props.location.search){
      this.searchByName(parse(this.props.location.search));
      
    } else {
      this.getAllListings();
    }
    this.unlisten = this.props.history.listen((location, action) => {
      if (location.search){
        this.searchByName(parse(location.search));  
      } else {
        this.getAllListings();
      }
    });
  }
  render(){
    return (
      <div className='container'>
          <div className="row">
            <div className=" col-md-12">
              <div className='addButton'>       
              <Link to = 'addItem' className="btn btn-primary" >Add New Item</Link>
              </div>
            </div>
          </div>
          <hr />
          <ul className="list-group">
            {this.state.listings.map( (item) => (
              <li className="list-group-item" key={item._id}>
                <Link to={`/listing/${item._id}`}>
                  <div className="media">
                    <div className="media-left">
                      <img className='itemImage media-object' src={item.image}/>
                    </div>
                    <div className="media-body">
                      <div> {item.name} </div>
                      <div> {item.description} </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>   
      </div>
    )
  }
}

export default Dash;