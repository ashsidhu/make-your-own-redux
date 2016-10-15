import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import todoApp from './reducers'

// these will be implemented by us
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
