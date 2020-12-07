import React, { Component } from 'react';

import { initialState } from './initial-state';
import './form.css';

export default class Form extends Component {
  
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    emailError: "",
    emailErrorMessage: ""
  }

  getInitialState = () => {
    this.setState(initialState)
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  // email validation

  validate = () => {
    const { email } = this.state;
    if (!email) {
      this.setState({
        emailError: "invalid",
        emailErrorMessage: "Please enter email"
      })
      return false
    }
    return true
  };

  //submiting form inputs

  onSubmit = (e) => {
    const { firstName, lastName, phone, email } = this.state;
    const { onItemAdded } = this.props;
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      onItemAdded(firstName, lastName, phone, email);
      this.getInitialState();
    }
  };

  //reset form

  onCancel = (e) => {
    e.preventDefault();
    this.getInitialState();
  };

  //clear displayed data

  onClear = (e) => {
    const { clearData } = this.props;
    e.preventDefault();
    clearData();
  };

  render() {
    
    const { firstName, lastName, phone, email, emailError, emailErrorMessage } = this.state;
    const { getPost } = this.props;

    return (
      <form className="form"
            onSubmit={this.onSubmit}>
              <div className="form-group">
                <div className="form-wrapper">
                  <label htmlFor="firstName"
                          className="label">
                            First name
                  </label>
                  <input className="form-input" 
                          type="text"
                          name="firstName"
                          value={firstName}
                          onChange={this.handleChange}/>
                </div>
                <div className="form-wrapper">
                  <label htmlFor="lastName"
                          className="label">
                            Last name
                  </label>
                  <input className="form-input" 
                          type="text"
                          name="lastName"
                          value={lastName}
                          onChange={this.handleChange}/>
                </div>
                <div className="form-wrapper">
                  <label htmlFor="phone"
                          className="label">
                            Phone number
                  </label>
                  <input className="form-input" 
                          type="tel"
                          name="phone"
                          value={phone}
                          onChange={this.handleChange}/>
                </div>
                <div className="form-wrapper">
                  <label htmlFor="email"
                          className="label">
                            Email
                            <span className="required">*</span>
                  </label>
                  <input className="form-input" 
                          type="email"
                          name="email"
                          value={email}
                          onChange={this.handleChange}/>
                  <div className={emailError}>{emailErrorMessage}</div>
                </div>
                <div className="buttons-group">
                  <button className='btn add-btn'
                          type="submit">
                          Add Item
                  </button>
                  <button className='btn cancel-btn'
                          onClick={this.onCancel}>
                          Cancel
                  </button>
                  <button className='btn getdata-btn'
                          onClick={getPost}>
                          Get data
                  </button>
                  <button className='btn clear-btn'
                          onClick={this.onClear}>
                          Clear
                  </button>
                </div>
              </div>
      </form>
    )
  }
}
