import React, { Component } from 'react';

import './form.css';

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  emailError: "",
  emailClazz: ""
}

export default class Form extends Component {
  
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    emailError: "",
    emailClazz: ""
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
        emailError: "Please enter email",
        emailClazz: "invalid"
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

    const { firstName, lastName, phone, email, emailError, emailClazz } = this.state;
    const { getPost } = this.props;

    return (
      <form className="form"
            onSubmit={this.onSubmit}>

        <div className="form-group">
					<div className="form-wrapper">
            <label  htmlFor="firstName" 
                    className="label">
                    First name
            </label>
            <input  className="form-input" 
                    type="text" 
                    name="firstName" 
                    value={firstName} 
                    onChange={this.handleChange} />
					</div>
          <div className="form-wrapper">
            <label  htmlFor="lastName" 
                    className="label">
                    Last name
            </label>
            <input  className="form-input" 
                    type="text" 
                    name="lastName" 
                    value={lastName} 
                    onChange={this.handleChange} />
					</div>
          <div className="form-wrapper">
            <label  htmlFor="phone" 
                    className="label">
                    Phone number
            </label>
            <input  className="form-input" 
                    type="tel" 
                    name="phone" 
                    value={phone} 
                    onChange={this.handleChange} />
					</div>
          <div className="form-wrapper">
            <label  htmlFor="email" 
                    className="label">
                    Email
                    <span className="required">*</span>
            </label>
            <input  className="form-input" 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={this.handleChange} />
						<div className={emailClazz}>{emailError}</div>
					</div>

          <div className="buttons-group">
            <button className='btn'
                  type="submit">
                    Add Item
            </button>
            <button className='btn'
                    onClick={this.onCancel}>
                    Cancel
            </button>
            <button className='btn'
                    onClick={getPost}>
                    Get data
            </button>
            <button className='btn'
                    onClick={this.onClear}>
                    Clear
            </button>
          </div>

        </div>
        
      </form>
    )
  }
}