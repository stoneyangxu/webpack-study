import _ from 'lodash';
import './styles.scss'

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('container')
  element.classList.add('hello')

  return element;
}

document.body.appendChild(component());
