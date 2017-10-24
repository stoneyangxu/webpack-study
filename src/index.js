import _ from 'lodash';
import printMe from './print'

import './styles.scss';
import data from './data.xml'

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('container')
  element.classList.add('hello')

  console.log(data);

  var btn = document.createElement('button')
  btn.classList.add('btn')
  btn.classList.add('btn-primary')
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn)


  return element;
}

let element = component()
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./print', function() {    
    console.log('Accepting the updated printMe module!');    
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  });
}