import React from 'react';
import { fetchusers,viewuser } from "../actions/usersList.action";
import { connect } from "react-redux";
import UsersListComponent from "../components/usersList.component";
import { userslistSelector, currentuserSelector } from '../selectors/usersList.selector';

const UsersListContainer = (props) => <UsersListComponent {...props} />;

const mapStateToProps = (store) => {
  return {
    users: userslistSelector(store),
    currentuser: currentuserSelector(store)
  }
}

const mapActionsToProps = dispatch => {
  return {
    fetchusers: (size) => {
      dispatch(fetchusers(size));
    },
    viewuser : (data) => {
      dispatch(viewuser(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(UsersListContainer);