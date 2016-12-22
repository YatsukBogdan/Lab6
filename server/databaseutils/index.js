var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema({
  id: Number,
  url: String,
  img: String,
  album: String,
  name: String,
  artist: String,
  year: String
});

var SongsCountSchema = new Schema({
  name: String,
  count: Number
});

var connection = mongoose.createConnection('mongodb://localhost:27017/songs');

var song = connection.model('songs', SongSchema);
var songsCount = connection.model('songsCount', SongsCountSchema);

module.exports = {
  song: song,
  songsCount: songsCount
};
