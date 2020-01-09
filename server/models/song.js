const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Songs
let Song = new Schema({
  _songTitle: {
    type: String
  },
  _artistName: {
    type: String
  },
  _videoLink: {
    type: String
  }
},{
    collection: 'songs'
});

module.exports = mongoose.model('Song', Song);