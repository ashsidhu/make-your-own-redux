import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import todoApp from './reducers'

import { Provider } from 'react-redux'

// createStore is implemented by self
// import { createStore } from 'redux'
import { createStore } from './redux'

const store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
