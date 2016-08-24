const React = require('react');
const ReactDom = require('react-dom');
const Component = require('./index');

let handleChange = (value) => {
  console.log(value);
};
ReactDom.render(<Component name='Tom' onChange={handleChange}/>, document.getElementById('demo'));
