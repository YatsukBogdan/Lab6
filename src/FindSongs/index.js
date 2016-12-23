import React, { Component } from 'react';
import $ from 'jquery';
import Song from './Song.js';
import isAuthorized from '../isAuthorized';
import Header from '../Header';

const FindSongs = React.createClass({
  componentDidMount() {
    isAuthorized(this);
    this.findSongs();
  },
  getInitialState() {
    return {
      rendered_songs: [],
      word: ''
    }
  },
  findSongs() {
    this.setState({word: document.getElementById('findsong-input').value}, () => {
        $.get(
          '/findsong?word=' + this.state.word,
          (data) => {
            var new_rendered_songs = [];
            for (var i = 0; i < data.length; i++) {
              new_rendered_songs.push(<Song database_id={data[i].id}
                                            id={i}
                                            url={data[i].url}
                                            img={data[i].img}
                                            artist={data[i].artist}
                                            name={data[i].name}
                                            year={data[i].year}/>);
            }
            if (data.length == 0) {
              this.setState({rendered_songs: 'There is no songs for word - ' + this.state.word});
            } else {
              this.setState({rendered_songs: new_rendered_songs});
            }
          }
        );
      }
    )
  },
  render() {
    if (this.state.isAuthorized) {
      return (
        <div>
          <Header />
          <div className="container" id="main-content">
            <input onChange={e => this.findSongs(e)} id='findsong-input'/>
            <p>Result for word: {this.state.word}</p>
            {this.state.rendered_songs}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <div className="container" id="main-content">
              <p>You are not authorized</p>
          </div>
        </div>
      );
    }
  }
});

export default FindSongs;
