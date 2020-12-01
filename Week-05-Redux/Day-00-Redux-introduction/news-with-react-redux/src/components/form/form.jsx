/* eslint-disable react/prop-types */
import './form.scss';
import React from 'react';
import Sources from '../sources';

const Form = ({ onSelect, onChange, onSubmit }) => (
  <div className="form-container">
    <form onSubmit={onSubmit}>
      <div>
        <Sources onSelect={onSelect} />
        <input type="text" name="keywords" placeholder="Put some keyword here !" onChange={onChange} />
        <input type="submit" value="Search" />
      </div>
    </form>
  </div>
);

export default Form;
