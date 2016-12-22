import React, { Component } from 'react';
import $ from 'jquery';

const Song = React.createClass({
  deleteSong() {
    $.post(
      '/deletesong',
      {
        database_id: this.props.database_id
      },
      (data) => {
        location.reload();
      }
    );
  },
  render() {
    return (
      <div className="row song-record">
        <div className="col-md-5">
          <a href={this.props.url}>
            <img className="song-img" src={this.props.img} />
          </a>
        </div>
        <div className="col-md-7 song-description">
          <a className='page-link' href={'/song/' + this.props.database_id}>
            <h1><b>{this.props.name}</b></h1>
          </a>
          <h1><b>{this.props.artist}</b></h1>
          <button onClick={e => this.deleteSong(e)}>Delete</button>
        </div>
      </div>
    );
  }
});

export default Song;
