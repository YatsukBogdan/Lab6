import React, { Component } from 'react';
import $ from 'jquery';
import Song from './Song.js';

const FindSongs = React.createClass({
  componentDidMount() {
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
    return (
      <div className="container" id="header">
        <div id="header-text-main">
          <p>
            <b><a className="page-link" href="/">Music Lyrics</a></b>
          </p>
        </div>
        <div>
          <input onChange={e => this.findSongs(e)} id='findsong-input'/>
          <p>Result for word: {this.state.word}</p>
          {this.state.rendered_songs}
        </div>
      </div>
    );
  }
});

export default FindSongs;
