'use strict';


// server.js

// BASE SETUP
// ==============================================

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

// ROUTES
// ==============================================


app.use(cors({
  origin: (origin, callback) => {
    callback(null, true)
  },
  credentials: true
}));

app.use(bodyParser.json());

// sample route with a route the way we're used to seeing it
//get the json

app.get('/a-file', function (req, res) {
  const data = fs.readFileSync(__dirname + '/playlist.json');
  res.send(data);

});

//update the json

app.post('/playlist', (req, res) => {
  const data = fs.readFileSync(__dirname + '/playlist.json');
  const playlists = JSON.parse(data);

  playlists.push(req.body);

  fs.writeFileSync(__dirname + '/playlist.json', JSON.stringify(playlists));

  res.send('OK')
});


app.post('/playlist/updatetitle', (req, res) => {
  const data = fs.readFileSync(__dirname + '/playlist.json');
  const playlists = JSON.parse(data);

  let plyListTem = playlists.find((playlist) => playlist.id === req.body.plyListId);
  plyListTem.title = req.body.title;

  fs.writeFileSync(__dirname + '/playlist.json', JSON.stringify(playlists));
  res.send('OK')

});

app.post('/playlist/remove', (req, res) => {

  const data = fs.readFileSync(__dirname + '/playlist.json');
  const playlists = JSON.parse(data);

  let plyListTem = playlists.find((playlist) => playlist.id === req.body.plyListId);
  const index = playlists.indexOf(plyListTem);

  playlists.splice(index, 1);

  fs.writeFileSync(__dirname + '/playlist.json', JSON.stringify(playlists));
  res.send('OK')

});

app.post('/playlist/updateplylistfromdropdown', (req, res) => {

  const data = fs.readFileSync(__dirname + '/playlist.json');
  const playlists = JSON.parse(data);
  console.info('before', playlists);

  playlists.splice(0, playlists.length);
  console.info('after slice', playlists);

  req.body.forEach((plylist) => {
    playlists.push(plylist)
  });

  console.info('after', playlists);
  console.info(req.body);
  fs.writeFileSync(__dirname + '/playlist.json', JSON.stringify(playlists));
  res.send('OK')

});


// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
