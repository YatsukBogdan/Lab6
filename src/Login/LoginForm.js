import React from 'react';
import { Link, browserHistory } from 'react-router';
import $ from 'jquery';
import md5 from 'js-md5';

import isAuthorized from '../isAuthorized';

const LoginForm = React.createClass({
  componentDidMount() {
    isAuthorized(this);
  },
  getInitialState() {
    return {
      logined: 'undefined'
    }
  },
  loginUser(){
    $.post(
      '/login',
    {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    },
    (data) => {
      if (data.logined) {
        browserHistory.push('/');
      } else {
        this.setState({logined:'error'});
      }
    });
  },
  render() {
    if (!this.state.isAuthorized) {
      return (
        <section className="login" id="main-content">
            <label>
                Username
                <input type="text" name="username" id="username" />
            </label>
            <label>
                Password
                <input type="password" name="password" id="password" />
            </label>
            <button id="login-button" onClick={(e) => this.loginUser(e)} type="button">Login</button>
            {this.state.logined == 'error' ? <p id="login-error">Failed to login. Incorrect password or username</p> : ''}
        </section>
      )
    } else {
      return (
        <p>You already authorized</p>
      );
    }
  }
});

export default LoginForm;
