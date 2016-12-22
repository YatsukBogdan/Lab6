import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="container" id="header">
        <div id="header-text-main">
          <p>
            <b><a className="page-link" href="/">Music Lyrics</a></b>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
