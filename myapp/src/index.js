import React from 'react';
import ReactDOM from 'react-dom';

window.onload = () => {
  const element = <h1>Hello, world</h1>;
  ReactDOM.render(
    element,
    document.querySelector('#container')
  );
};
