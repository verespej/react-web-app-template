import { Button } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

import { updateTestValue } from 'actions/test-action';
import { RouteButton } from 'components/route-button';
import { ROUTE_PATH_HOME_SCREEN } from 'helpers/constants';
import { getTestValue, getTestValueRequestStatusAndDetails } from 'reducers/test-reducer';

import commonStyles from './common-styles.module.css';

export const RandomNumberGenerator = connect(
  state => ({
    testValue: getTestValue(state),
    testValueRequestStatus: getTestValueRequestStatusAndDetails(state).valueRequestStatus,
  }),
  {
    updateTestValue: testValue => updateTestValue(testValue),
  },
)(props => {
  function setRandomTestValue() {
    props.updateTestValue(Math.random().toString())
  }

  return (
    <React.Fragment>
      <div className={ commonStyles['display-group'] }>
        <div><b>Request status:</b> { props.testValueRequestStatus }</div>
        <div><b>Value:</b> { props.testValue || 0 }</div>
      </div>
      <div className={ commonStyles['display-group'] }>
        <Button onClick={ setRandomTestValue } variant="contained">
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
