'use strict';


// server.js

// BASE SETUP
// ==============================================

const express = require('express');
const app     = express();
const port    =   process.env.PORT || 3000;


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

/*

 app.get('/playlists', (req, res) => {
 const data = fs.readFileSync(__dirname + '/playlists.json')

 res.send(data)
 })

 */

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

  let plyListTem = playlists.find((playlist)=> playlist.id === req.body.plyListId);
  plyListTem.title = req.body.title;

  fs.writeFileSync(__dirname + '/playlist.json', JSON.stringify(playlists));
  res.send('OK')

});

app.post('/playlist/remove', (req, res) => {

  const data = fs.readFileSync(__dirname + '/playlist.json');
  const playlists = JSON.parse(data);

  let plyListTem = playlists.find((playlist)=> playlist.id === req.body.plyListId);
  const index = playlists.indexOf(plyListTem);

  playlists.splice(index, 1);

  fs.writeFileSync(__dirname + '/playlist.json', JSON.stringify(playlists));
  res.send('OK')

  /*
   if (action.type === 'REMOVE_LIST') {

   console.info('work');
   const playLists = [...playListData];
   let plyListTem = playLists.find((plyList) =>plyList.id === action.plyListId);
   console.info('remove',action.plyListId,plyListTem);
   const index = playLists.indexOf(plyListTem);
   playLists.splice(index, 1);


   return playLists;
   }
   */
});
/*

 if (action.type === 'UPDATE_PLAY_LIST_TITLE') {
 const playLists = [...playListData];
 let plyListTem = playLists.find((plyList) => plyList.id === action.plyListId);
 plyListTem.title = action.newTitle;

 return playLists;
 }



 app.post('/playlist', (req, res) => {
 const data = fs.readFileSync(__dirname + '/playlists.json')

 const playlists = JSON.parse(data)

 playlists.push(req.body)

 fs.writeFileSync(__dirname + '/playlist.json', JSON.stringify(playlists))

 res.send('OK')
 })
 */



// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);