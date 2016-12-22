import React, { Component } from 'react';

import Header from '../Header';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container" id="main-content">
            <h1><b>Access your favourite music lyrics easily</b></h1>
            <p>This site created for peoples who love not only <b>listening</b> their favourite music, but also <b>singing</b> it! You can access your favourite songs lyrics easily using our website. Share our site with your friends.</p>
            <h1>
              <b><a className="page-link" href="/songs/page/1/elements/5">All Songs</a></b>
            </h1>
            <h1>
              <b><a className="page-link" href="/addsong">Add Song</a></b>
            </h1>
            <h1>
              <b><a className="page-link" href="/findsongs">Find Song</a></b>
            </h1>
        </div>
      </div>
    );
  }
}

export default Main;
