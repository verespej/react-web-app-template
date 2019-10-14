import React from 'react';
import { Route, Switch } from "react-router-dom";

import { HomeScreen } from 'components/home-screen';
import { RandomNumberGenerator } from 'components/random-number-generator';
import { ROUTE_PATH_HOME_SCREEN, ROUTE_PATH_RANDOM_NUMBER_GENERATOR } from 'helpers/constants';

import styles from './app.module.css';

export function App() {
  return (
    <div className={ styles.app }>
      <Switch>
        <Route path={ ROUTE_PATH_RANDOM_NUMBER_GENERATOR }>
          <RandomNumberGenerator />
        </Route>
        <Route path={ ROUTE_PATH_HOME_SCREEN }>
          <HomeScreen />
        </Route>
      </Switch>
    </div>
  );
}
