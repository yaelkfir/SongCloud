

export default function playListDataReducer(playListData = [], action) {

  if(action.type === 'SET_FIRST_PLY_LIST_DATA'){

    const playLists = action.FirstPlyListsData;
    return playLists;

  }

  if (action.type === 'UPDATE_PLAY_LISTS_DATA'){

    const playLists = action.tempPlyListsData;
    return playLists
  }

  if (action.type === 'ADD_TRACK_TO_PLAY_LIST') {

    const playLists = [...playListData];
    let plyListTem = playLists.find((plyList) => `${plyList.id}` === action.plyListId);
    plyListTem.tracks.push(action.track);

    return playLists;
  }

  if (action.type === 'REMOVE_TRACK_FROM_PLAY_LIST') {

    const playLists = [...playListData];
    let plyListTem = playLists.find((plyList) =>`${plyList.id}` === action.plyListId);
    let tempTrack = plyListTem.tracks.find((temTrack) => temTrack.id === action.track.id);
    const index = plyListTem.tracks.indexOf(tempTrack);
    plyListTem.tracks.splice(index, 1);


    return playLists;
  }

  if (action.type === 'UPDATE_PLAY_LIST_TITLE') {
    const playLists = [...playListData];
    let plyListTem = playLists.find((plyList) => plyList.id === action.plyListId);
    plyListTem.title = action.newTitle;

    return playLists;
  }

  if (action.type === 'SET_OLD_PLAY_LIST') {
    const playLists = [...playListData];
    let plyListTem = playLists.find((plyList) => plyList.id === action.plyListId);

    plyListTem.newPlyList = false;

    return playLists;
  }

  if (action.type === 'ADD_NEW_PLAY_LIST') {

    const playLists = [...playListData];
    if(action.track === false) {
      playLists.push({
        id: action.plyListId,
        title: '',
        newPlyList: true,
        tracks: []
      })
    }
    else {
        playLists.push({
          id: action.plyListId,
          title: '',
          newPlyList: true,
          tracks: [action.track]
        });
      }
    console.info(playLists);
    return playLists;
  }

  if (action.type === 'REMOVE_LIST') {

    const playLists = [...playListData];
    let plyListTem = playLists.find((plyList) =>plyList.id === action.plyListId);

    const index = playLists.indexOf(plyListTem);
    playLists.splice(index, 1);


    return playLists;
  }


  return playListData;
  }

/*

 addNewPlyList(track) {
 const playLists = [...this.state.plyListData];
 console.info(track);
 if(track === undefined) {
 playLists.push({
 id: uuid(),
 title: '',
 newPlyList: true,
 tracks: []
 });
 }
 else {

 playLists.push({
 id: uuid(),
 title: '',
 newPlyList: true,
 tracks: [track]
 });
 }

 this.setState({plyListData: playLists});
 }
 */
