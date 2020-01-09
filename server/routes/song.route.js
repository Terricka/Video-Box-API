const express = require('express');
const app = express();
const songRoutes = express.Router();

// Require song model in our routes module
let Song = require('../models/song');

// Defined store route
songRoutes.route('/add').post(function (req, res) {
    console.log('adding 2')
    console.log(req.body)
  let song = new Song(req.body);
  song.save()
    .then(song => {
      res.status(200).json({'song': 'song in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
songRoutes.route('/').get(function (req, res) {
    Song.find(function (err, songs){
    if(err){
      console.log(err);
    }
    else {
      res.json(songs);
    }
  });
});

// Defined edit route
songRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Song.findById(id, function (err, song){
      res.json(song);
  });
});

//  Defined update route
songRoutes.route('/update/:id').post(function (req, res) {
    Song.findById(req.params.id, function(err, next, songs) {
    if (!song)
      return next(new Error('Could not load Document'));
    else {
        song.songTitle = req.body.songTitle;
        song.artistName = req.body.artistName;
        song.videoLink = req.body.videoLink;

        song.save().then(song => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
songRoutes.route('/delete/:id').get(function (req, res) {
    Songs.findByIdAndRemove({_id: req.params.id}, function(err, song){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = songRoutes;