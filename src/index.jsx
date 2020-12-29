import React from 'react';
import {render} from 'react-dom';
import App from './components/app.jsx';
import './styles/main.scss';

render(
  <App />,
  document.getElementById('root')
)

// Enables hot reloading with webpack-hot-middleware
if (typeof(module.hot) !== 'undefined') {
  module.hot.accept()
}
