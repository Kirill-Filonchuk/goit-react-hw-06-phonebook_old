import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';

import './index.css';
import App from './components/App/App.js';
console.log(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* //Persis */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// если персистер - то Апп обернуть в персистГейт
