import React from 'react';

import Header from '../Header';
import LoginForm from './LoginForm.js';

import './style.css';

const Login = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <LoginForm />
      </div>
    );
  }
});

export default Login;
