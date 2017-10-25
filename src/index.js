import _ from 'lodash';
import { cube } from './math'

import './styles.scss';
import data from './data.xml'

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', '5 cubed is equal to ' + cube(5)], ' ');
  element.classList.add('container')
  element.classList.add('hello')

  var btn = document.createElement('button')
  btn.classList.add('btn')
  btn.classList.add('btn-primary')
  btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;
  btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    const printMe = module.default
    printMe()
  });

  element.appendChild(btn)

  return element;
}

document.body.appendChild(component())
