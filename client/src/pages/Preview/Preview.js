import React, {Component} from "react";
import {Link, Route} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import Listing from '../../components/Listing';
import {parse} from 'query-string';

class Preview extends Component{
  state={
    name: '',
    image: '',
    price: '',
    description: ''
  }
  componentDidMount(){
    this.setState(parse(this.props.location.search));
  }
  render(){
    const { match } = this.props;
    console.log(this.state);

    return (
      <div>
        <Listing {...this.state} />
        <div className="row">
          <div className=" col-md-5">      
              <Link to={`${match.url}/success`} className="btn btn-primary">Submit Item</Link>    
          </div>
          <div className=" col-md-5">    
              <Link to='/dash' className="btn btn-danger" >Cancel</Link>     
          </div>
        </div>
        <Route path={`${match.url}/success`} render={prop => (
          <Modal show={true}>
            <Modal.Header closeButton>
              <Modal.Title>Successfully added Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Link to='/addItem' className="btn btn-danger" >Add another Item</Link>
              <Link to='/dash' className="btn btn-danger" >Return Home</Link>
            </Modal.Body>
          </Modal> 
        )}/>
      </div>
    )
  }
}

export default Preview;
