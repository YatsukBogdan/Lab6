import React, { Component } from 'react';
import $ from 'jquery';

const AddSong = React.createClass({
  getInitialState() {
    return {
      urlDisabled: 'disabled',
      localDisabled: 'disabled'
    }
  },
  uploadSong() {
    var img = document.getElementById('img').value;
    if (document.getElementById('local_option').checked) {
      img = 'local';
      var data = new FormData();
      data.append('image', $('#upload-file-input')[0].files[0]);
      $.ajax({
        method:"POST",
        url: '/uploadimage',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        success: function(res) {
          //window.location.reload();
        }
      });
    }
    $.post(
      '/addsong',
      {
        name: document.getElementById('name').value,
        artist: document.getElementById('artist').value,
        url: document.getElementById('url').value,
        img: img,
        album: document.getElementById('album').value,
        year: document.getElementById('year').value,
      },
      (data) => {
        document.getElementById('name').value = '';
        document.getElementById('artist').value = '';
        document.getElementById('url').value = '';
        document.getElementById('img').value = '';
        document.getElementById('album').value = '';
        document.getElementById('year').value = '';
      }
    );
  },
  urlLocal() {
    if (document.getElementById('url_option').checked) {
      this.setState({
        urlDisabled: '',
        localDisabled: 'disabled'
      });
    } else if (document.getElementById('local_option').checked) {
      this.setState({
        urlDisabled: 'disabled',
        localDisabled: ''
      });
    }
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

          <label>Name</label>
          <input id='name'/><br/>

          <label>Artist</label>
          <input id='artist'/><br/>

          <input onChange={e => this.urlLocal()} type='radio' name='image-option' id='url_option'/> URL<br/>
          <input onChange={e => this.urlLocal()} type='radio' name='image-option' id='local_option'/> Local storage<br/>

          <label>Image URL</label>
          <input disabled={this.state.urlDisabled} id='img'/><br/>
          <input disabled={this.state.localDisabled} type="file" id="upload-file-input"/><br/>

          <label>URL YouTube</label>
          <input id='url'/><br/>

          <label>Album</label>
          <input id='album'/><br/>

          <label>Year</label>
          <input id='year'/><br/>

          <button onClick={e => this.uploadSong(e)}>Add</button>
        </div>
      </div>
    );
  }
});

export default AddSong;
