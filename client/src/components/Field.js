import React from 'react';

const Field = (props) => (
  
  <div className="form-group">
    <label >{props.label.toUpperCase()}</label>
    <input className="form-control"
      onChange={props.handleChange}
      type="text"
      value={props.value}
      name={props.label}
    />
  </div>
)


export default Field;