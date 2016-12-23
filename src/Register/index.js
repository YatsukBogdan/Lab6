import React, { Component } from 'react';
import Header from '../Header';
import RegisterForm from './RegisterForm';

import $ from 'jquery';

const Register = React.createClass({

  render() {
    return (
      <div>
        <Header />
        <RegisterForm />
      </div>
    );
  }
});

export default Register;
