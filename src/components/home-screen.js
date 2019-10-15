import React from 'react';

import { RouteButton } from 'components/route-button';
import { ROUTE_PATH_EXAMPLE_SCREEN } from 'helpers/constants';
import logo from 'static-assets/logo.svg';

import homeScreenStyles from './home-screen.module.css';
import commonStyles from './common-styles.module.css';

export function HomeScreen() {
  return (
    <React.Fragment>
      <div className={ commonStyles['display-group'] }>
        <img src={ logo } className={ homeScreenStyles['home-screen-logo'] } alt="logo" />
      </div>
      <div className={ commonStyles['display-group'] }>
        This is a template for React web apps. It's intended to be
        cloned for quickly spinning up new web apps.
      </div>
      <div className={ commonStyles['display-group'] }>
        <RouteButton to={ ROUTE_PATH_EXAMPLE_SCREEN } variant="contained">
          Check out an example screen
        </RouteButton>
      </div>
    </React.Fragment>
  );
}
