import React from 'react';
import { connect } from 'react-redux';
import { sortByName, sortByGender, sortByBirthday  } from '../actions/filter';

const ContactsFilter = (props) => {
  if (props.authentication.authenticated) {
    return (
      <div className="input-group">
          <div className="input-group__item">
            <select
              className="select"
              value={props.filter.sortBy}
              onChange={(e) => {
                if (e.target.value === 'name') {
                  props.dispatch(sortByName());
                } else if (e.target.value === 'gender') {
                  props.dispatch(sortByGender());
                } else if (e.target.value === 'birthday'){
                  props.dispatch(sortByBirthday());
                }
              }}
            >
              <option value="name">Sort By Name</option>
              <option value="gender">Sort By Gender</option>
              <option value="birthday">Sort By Birthday</option>
            </select>
          </div>
      </div>
    )
  } else {
    return (
      <p></p>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    authentication: state.authenticated
  };
};

export default connect(mapStateToProps)(ContactsFilter);