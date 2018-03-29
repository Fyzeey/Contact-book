import React from 'react';
import DatePicker from 'react-datepicker';
import { Redirect } from 'react-router';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import { createNewContact } from '../helper/people';

export default class ContactFrom extends React.Component {
  state = {
    redirectToNewPage: false,
    familyName: '',
    givenName:'',
    gender: '',
    birthday: moment(),
    email:'',
    phone:'',
    error:''
  };

  onFamilyNameChange = (e) => {
    const familyName = e.target.value;
    this.setState(() => ({familyName}));
  };

  onGivenNameChange = (e) => {
    const givenName = e.target.value;
    this.setState(() => ({givenName}));
  };

  onGenderChange = (e) => {
    const gender = e.target.value;
    this.setState(() => ({gender}));
  };

  onBirthdayChange = (birthday) => {
    this.setState(() => ({birthday}));
  };

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({email}));
  };

  onPhoneChange = (e) => {
    const phone = e.target.value; 
    this.setState(() => ({phone}));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.familyName || !this.state.givenName || !this.state.gender || ! this.state.birthday) {
      this.setState(() => ({ error: 'Please provide Name, Gender and Birthday information'}));
    } else {
      this.setState(() => ({ error: ''}));
      createNewContact(
        this.state.familyName, 
        this.state.givenName, 
        this.state.gender, 
        this.state.birthday.format('YYYY-MM-DD'),
        this.state.email,
        this.state.phone
      );
      //Set time delay to ensure people api complete create contact request
      setTimeout(() => {
        this.setState({ redirectToNewPage: true })
      }, 1000)
    }
  };

  render() {
    if (this.state.redirectToNewPage) {
      return (
        <Redirect to="/"/>
      )
    } else {
      return (
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input 
            className="text-input"
            type="text"
            placeholder="Family Name"
            autoFocus
            value={this.state.familyName}
            onChange={this.onFamilyNameChange}
          />
          <input 
            className="text-input"
            type="text"
            placeholder="Given Name"
            value={this.state.givenName}
            onChange={this.onGivenNameChange}
          />
          <input 
            className="text-input"
            type="text"
            placeholder="Gender"
            value={this.state.gender}
            onChange={this.onGenderChange}
          />
          <DatePicker
            className="text-input text-input--width"
            dateFormat="YYYY-MM-DD"
            selected={this.state.birthday}
            onChange={this.onBirthdayChange}
          />
          <input 
            className="text-input"
            type="email"
            placeholder="Email Address (Optional)"
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <input 
            className="text-input"
            type="number"
            placeholder="Phone Number (Optional)"
            value={this.state.phone}
            onChange={this.onPhoneChange}
          />
          <div>
            <button className="button">Create Contact</button>
          </div>
        </form>
      )
    };
  };
}