import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux';
import store from './Redux/Store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Provider store={store}>
    <App />
    </Provider>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
//   window.React1 = require('react'),
//   require('react-dom'),
// window.React2 = require('react'),
// console.log(window.React1 === window.React2);
);

