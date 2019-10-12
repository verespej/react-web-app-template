import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureReduxStore } from 'helpers/configure-redux-store'

import { App } from './app';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (
      <Provider store={ configureReduxStore() }>
        <App />
      </Provider>
    ),
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
