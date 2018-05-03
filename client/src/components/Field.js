import React from 'react';

const Field = ({ label, handleChange, type="text", value }) => (
  
  <div className="form-group">
    <label >{label.toUpperCase()}</label>
    <input className="form-control"
      onChange={handleChange}
      type={type}
      value={value}
      name={label}
    />
  </div>
)


export default Field;