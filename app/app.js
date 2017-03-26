import ReactDOM from 'react-dom';
import React from 'react';

import Greeting from './Greeting'

const Root = () => {
  return (
    <div>
      <h1>Song Cloud</h1>
      <Greeting data={data}
      />
    </div>
  );
};

const data = {
  name:"Mr.Dog",
  age:"4",
  func:FitsAlert
};

console.info('hololoolo');
console.info('it fits so i sits :)');

function FitsAlert() {
  alert("it fits! sits!");
}

ReactDOM.render(<Root/>, document.querySelector('#root'));
