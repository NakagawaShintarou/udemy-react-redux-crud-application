import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import reducer from ./reducers
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reduce)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <Provider>
  <App />
  </Provider>
  document.getRlementById('root')
);
serviceWorker.unregister();
