import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { handleAuthClick, handleSignoutClick } from '../helper/people';

const Header = (props) => {
  if (props.authentication.authenticated) {
    return (
      <div>
        <div className="header">
          <div className="content-container">
            <div className="header__content">
              <Link className="header__title" to="/"> 
                <h1>Google People API </h1>
              </Link>
              <button className="button button--link" onClick={handleSignoutClick}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h2 className="box-layout__title" >Google People API</h2>
          <button className="button" onClick={handleAuthClick}>Login with Google</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authentication: state.authenticated
  };
};
export default connect(mapStateToProps)(Header);