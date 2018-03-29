//Component for create contact page
import React from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const AddPage = (props) => {
  if (props.authentication.authenticated) {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Add New Contact</h2>
          </div>
        </div>
        <div className="content-container">
          <ContactForm />
        </div>
      </div>
    )
  } else if (!props.authentication.authenticated){
      return(
        <Redirect to="/"/>
      )
    }
};

const mapStateToProps = (state) => {
  return {
    authentication: state.authenticated
  };
};

export default connect(mapStateToProps)(AddPage);