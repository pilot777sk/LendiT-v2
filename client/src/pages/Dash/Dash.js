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
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      if (location.search){
        this.searchByName(parse(location.search));  
      } else {
        this.getAllListings();
      }
    });
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
          <div className="jumbotron"> 
              <ul>
                {this.state.listings.map( (item) => (
                  <li key={item._id}>
                    <Link to={`/listing/${item._id}`}>
                      <div className="post">
                      <div><img className='itemImage' src={item.image}/></div>
                      <div> {item.name} </div>
                      <div> {item.description} </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <hr />
          </div>        
      </div>
    )
  }
}

export default Dash;