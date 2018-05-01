import React, {Component} from "react";
import {Link, Route, Redirect} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Listing from '../../components/Listing';
import {parse} from 'query-string';
import axios from 'axios';

class Preview extends Component{
  state={
    name: '',
    image: '',
    price: '',
    description: '',
    successful: false
  }
  saveListing = () => {
    axios.post('/api/items/createItem',this.state)
      .then(response => {
        this.setState({
          successful: true
        })
      })
  }
  componentDidMount(){
    this.setState(parse(this.props.location.search));
  }
  render(){
    const { match } = this.props;
    if(this.state.successful){
      return <Redirect to='/success' />
    }

    return (
      <div>
        <Listing {...this.state} />
        <div className="row">
          <div className=" col-md-6">      
              <Button onClick={this.saveListing} type='button' className="btn btn-primary">Submit Item</Button>    
          </div>
          <div className=" col-md-6">    
              <Link to='/dash' className="btn btn-danger" >Cancel</Link>     
          </div>
        </div>
      </div>
    )
  }
}

export default Preview;
