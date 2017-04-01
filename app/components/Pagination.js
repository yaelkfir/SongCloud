/**
 * Created by yaelo on 4/1/17.
 */

import React from 'react'

export default function Pagination(props){
  const tracklist = props.tracks;



  function isPagination(length){
    if(length>9){
      return <div className="pagination">
        <button className="prev-btn">prev</button>
        <span className="page-num">page 1</span>
        <button className="next-btn">next</button>
      </div>
    }
    else {
      return null;
    }
  }

  return isPagination(tracklist.length);

}
