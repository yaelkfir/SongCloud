'use strict';


// server.js

// BASE SETUP
// ==============================================

//2
const os = require('os');



const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

//1
const path = require('path');
// ROUTES
// ==============================================
//2 + 3
fs.writeFileSync(os.tmpdir() + '/playlist.json', fs.readFileSync(__dirname + '/playlist.json'));

//1


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
  const data = fs.readFileSync(os.tmpdir() + '/playlist.json');
  res.send(data);

});

//new
app.get('playlists', function (req, res) {
  const data = fs.readFileSync(os.tmpdir() + '/playlist.json');
  res.send(data);

});

//update the json

app.post('/playlist', (req, res) => {
  const data = fs.readFileSync(os.tmpdir() + '/playlist.json');
  const playlists = JSON.parse(data);

  playlists.push(req.body);

  fs.writeFileSync(os.tmpdir() + '/playlist.json', JSON.stringify(playlists));

  res.send('OK')
});


app.post('/playlist/updatetitle', (req, res) => {
  const data = fs.readFileSync(os.tmpdir() + '/playlist.json');
  const playlists = JSON.parse(data);

  let plyListTem = playlists.find((playlist) => playlist.id === req.body.plyListId);
  plyListTem.title = req.body.title;

  fs.writeFileSync(os.tmpdir() + '/playlist.json', JSON.stringify(playlists));
  res.send('OK')

});

// new
app.put('/playlist', (req, res) => {
  const data = fs.readFileSync(os.tmpdir() + '/playlist.json');
  const playlists = JSON.parse(data);

  let playList = playlists.find((playlist) => playlist.id === req.body.plyListId);
  playList.title = req.body.title;

  fs.writeFileSync(os.tmpdir() + '/playlist.json', JSON.stringify(playlists));
  res.send('OK')

});

app.post('/playlist/remove', (req, res) => {

  const data = fs.readFileSync(os.tmpdir() + '/playlist.json');
  const playlists = JSON.parse(data);

  let plyListTem = playlists.find((playlist) => playlist.id === req.body.plyListId);
  const index = playlists.indexOf(plyListTem);

  playlists.splice(index, 1);

  fs.writeFileSync(os.tmpdir() + '/playlist.json', JSON.stringify(playlists));
  res.send('OK')

});

app.post('/playlist/updateplylistfromdropdown', (req, res) => {

  const data = fs.readFileSync(os.tmpdir() + '/playlist.json');
  const playlists = JSON.parse(data);
  console.info('before', playlists);

  playlists.splice(0, playlists.length);
  console.info('after slice', playlists);

  req.body.forEach((plylist) => {
    playlists.push(plylist)
  });

  console.info('after', playlists);
  console.info(req.body);
  fs.writeFileSync(os.tmpdir() + '/playlist.json', JSON.stringify(playlists));
  res.send('OK')

});

app.get('/app.js', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/app.js')));
app.use('/_', express.static(path.resolve(__dirname, '../dist/_')));
app.get('/**', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));


// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
