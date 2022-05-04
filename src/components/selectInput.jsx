import React from 'react';

const SelectInput = ({ name, label, error, ...rest }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>

      <select autoFocus {...rest} id={name} className='form-control'>
        <option name={name}>{...rest}</option>
      </select>
    </div>
  );
};

export default SelectInput;
