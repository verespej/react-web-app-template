import React from 'react';
import { Route, Switch } from "react-router-dom";

import { HomeScreen } from 'components/home-screen';
import { ExampleScreen } from 'components/example-screen';
import { ROUTE_PATH_HOME_SCREEN, ROUTE_PATH_EXAMPLE_SCREEN } from 'helpers/constants';

import styles from './app.module.css';

export function App() {
  return (
    <div className={ styles.app }>
      <Switch>
        <Route path={ ROUTE_PATH_EXAMPLE_SCREEN }>
          <ExampleScreen />
        </Route>
        <Route path={ ROUTE_PATH_HOME_SCREEN }>
          <HomeScreen />
        </Route>
      </Switch>
    </div>
  );
}
