import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './core/store/configureStore'; 
import App from './containers/App';

import '../node_modules/normalize.css/normalize.css';
import '../node_modules/rc-cascader/assets/index.css';
import './styles/main.css'; 
import 'whatwg-fetch'


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);