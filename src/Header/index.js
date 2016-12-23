import React, { Component } from 'react';
import './style.css';
import $ from 'jquery';

import isAuthorized from '../isAuthorized';

const Header = React.createClass({
  componentDidMount() {
    isAuthorized(this);
  },
  getInitialState() {
    return {
      isAuthorized: false,
      username: ''
    };
  },
  logout() {
    $.post(
      '/logout',
      {},
      (res) => {
        console.log(res);
        location.reload();
      }
    );
  },
  renderLoginBlock() {
    if (!this.state.isAuthorized) {
      return (
        <div id="login-block">
          <p className="header-text-main">
            <a className="page-link" href='/login'>Login</a>
          </p>
          <p className="header-text-main">
            <a className="page-link" href='/register'>Register</a>
          </p>
        </div>
      );
    }
  },
  render() {
    return (
      <div className="container" id="header">
        <div>
          <p className="header-text-main">
            <b><a className="page-link" href="/">Music Lyrics</a></b>
          </p>
          <div className="user-block">
            {this.state.isAuthorized ? <p className="header-text-main username-header">Username: <b>{this.state.currentUser}</b></p> : ''}
            {this.state.isAuthorized ? <button onClick={e => this.logout(e)}>Logout</button> : ''}
            {this.state.restriction == 'admin' ? <a className="page-link header-text-main admin-panel" href="/admin">Admin Panel</a> : ''}
          </div>
          {this.renderLoginBlock()}
        </div>
      </div>
    );
  }
});

export default Header;
