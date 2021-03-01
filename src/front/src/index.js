import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.sass';

import App from './App';

import configureStore from './data/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
