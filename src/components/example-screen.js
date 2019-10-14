import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

import { updateExampleValue } from 'actions/example-action';
import { RouteButton } from 'components/route-button';
import { ROUTE_PATH_HOME_SCREEN } from 'helpers/constants';
import { getExampleValue, getExampleValueRequestStatusAndDetails } from 'reducers/example-reducer';

import commonStyles from './common-styles.module.css';

export const ExampleScreen = connect(
  state => ({
    value: getExampleValue(state),
    valueRequestStatus: getExampleValueRequestStatusAndDetails(state).valueRequestStatus,
  }),
  {
    updateValue: value => updateExampleValue(value),
  },
)(props => {
  function updateValue() {
    props.updateValue(Math.random().toString())
  }

  return (
    <React.Fragment>
      <div className={ commonStyles['display-group'] }>
        <div><b>Request status:</b> { props.valueRequestStatus }</div>
        <div><b>Value:</b> { props.value || 0 }</div>
      </div>
      <div className={ commonStyles['display-group'] }>
        <Button onClick={ updateValue } variant="contained">
          Generate new value
        </Button>
      </div>
      <div className={ commonStyles['display-group'] }>
        <RouteButton to={ ROUTE_PATH_HOME_SCREEN } variant="outlined">
          Back to home screen
        </RouteButton>
      </div>
    </React.Fragment>
  );
});
