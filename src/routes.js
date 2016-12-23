import React from 'react';
import { Router, Route } from 'react-router';

import Main from './Main';
import Songs from './Songs';
import FindSongs from './FindSongs';
import AddSong from './AddSong';
import Song from './Song';
import Register from './Register';
import Login from './Login';
import Admin from './Admin';

const Routes = (props) => (
  <Router {...props} >
    <Route path="/" component={Main}/>
    <Route path="/songs/page/:page/elements/:elements" component={Songs}/>
    <Route path="/song/:id" component={Song}/>
    <Route path="/findsongs" component={FindSongs}/>
    <Route path="/addsong" component={AddSong}/>
    <Route path="/register" component={Register}/>
    <Route path="/login" component={Login}/>
    <Route path="/admin" component={Admin}/>
  </Router>
);

export default Routes;
