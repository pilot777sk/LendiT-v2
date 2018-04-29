import React, {Component} from "react";
import axios from 'axios';

import Listing from "../../components/Listing";

class ListingContainer extends Component{
  state={}
  componentDidMount(){
    console.log(this.props.match.params.id);
    axios.get(`/api/items/${this.props.match.params.id}`)
      .then(response => {
        this.setState(response.data)
      }) 
  }
  render(){
    console.log(this.state)
    return <Listing {...this.state} />;
  }
}

export default ListingContainer;
