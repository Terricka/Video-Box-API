const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Songs
let Song = new Schema({
  songTitle: {
    type: String
  },
  artistName: {
    type: String
  },
  videoLink: {
    type: String
  }
},{
    collection: 'songs'
});

module.exports = mongoose.model('Song', Song);