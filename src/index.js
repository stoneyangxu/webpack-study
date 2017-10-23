import _ from 'lodash';
import './styles.scss';
import data from './data.xml'

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('container')
  element.classList.add('hello')

  console.log(data);

  return element;
}

document.body.appendChild(component());
