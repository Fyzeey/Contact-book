import React from 'react';
import { handleClientLoad } from '../helper/people';
import { connect } from 'react-redux';
import Contacts from './Contacts';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://apis.google.com/js/api.js";
    script.async = true;
    script.onload = () => {
      handleClientLoad();
    }
    script.onreadystatechange = () => {
      if (this.readyState === 'complete') {
        this.onload();
      }
    }
    document.body.appendChild(script);
    console.log('load script done');
  }

  render(){
    return(
      <div>
        <div className="page-header">
          <div className="content-container">
            <div className="page-header__actions">
              <Link className="button" to="/create">Create Contact</Link>
            </div>
          </div>
        </div>
        <div className="content-container">
          <Contacts />
        </div>
      </div>
    )
  };

}

export default Dashboard;