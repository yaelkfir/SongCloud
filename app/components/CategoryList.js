/**
 * Created by yaelo on 4/1/17.
 */

import React from 'react'

export default function CategoryList (){
  return <ul className="category-list">
    <li className="category-title"><span>Genres:</span></li>
    <li className="category"><a href="#" className="selected-category">category1</a></li>
    <li className="category"><a href="#">category2</a></li>
    <li className="category"><a href="">category3</a></li>
  </ul>
}
