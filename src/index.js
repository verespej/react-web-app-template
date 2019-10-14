import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-roboto'; // For material-ui (see https://material-ui.com/components/typography/#general

import { App } from 'components/app';
import { configureReduxStore } from 'helpers/configure-redux-store';

import './index.css';
import * as serviceWorker from './serviceWorker';

const store = configureReduxStore();

ReactDOM.render(
  (
    <React.Fragment>
      <CssBaseline />
      <Provider store={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
