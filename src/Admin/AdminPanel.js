import React from 'react';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';
import md5 from 'js-md5';

import isAuthorized from '../isAuthorized';

const AdminPanel = React.createClass({
  componentDidMount() {
    isAuthorized(this);
    this.loadUsers();
  },
  getInitialState() {
    return {
      rendered_user_data: []
    };
  },
  loadUsers() {
    $.post(
      '/loadusers',
      {},
      (data) => {
        var rendered_user_data = [];
        for (var i = 0; i < data.users.length; i++) {
          rendered_user_data.push(<p>{data.users[i].username}</p>)
        }
        this.setState({rendered_user_data: rendered_user_data});
      }
    );
  },
  render() {
    if (this.state.restriction == 'admin') {
      return (
        <div id="main-content">
          <h1>Registered users:</h1>
          {this.state.rendered_user_data}
        </div>
      )
    } else {
      return (
        <p>You have no admin restriction</p>
      );
    }
  }
});

export default AdminPanel;
