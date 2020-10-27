import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux';
import Home from './pages/home/index';

ReactDOM.render(
  <>
    <Provider store={createStore(reducers)}>
      <React.StrictMode>
        <Home />
      </React.StrictMode>
    </Provider>
  </>,
  document.getElementById('root')
);
