import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as Redux } from 'react-redux';
import { ThemeProvider } from 'styled-components'
import { Provider as Rebass } from 'rebass'
import theme from './styles/rebass-theme'
import configureStore from './core/store/configureStore'; 
import App from './containers/App';

import '../node_modules/normalize.css/normalize.css';
import '../node_modules/rc-cascader/assets/index.css';
import './styles/main.css'; 
import 'whatwg-fetch'

const store = configureStore();

ReactDOM.render(
  <Redux store={store}>
    <Rebass theme={theme}>
      <App />
    </Rebass>
  </Redux>,
  document.getElementById('root')
);