import React from 'react';
import {Image} from 'react-bootstrap';

const Preview = (props) => (
  <div>
    {props.listingValues.name},
    {props.listingValues.price},
    {props.listingValues.description},
    <Image src={props.listingValues.image} />
  </div>
)


export default Preview;

