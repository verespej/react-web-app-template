import { Button } from '@material-ui/core'
import React from 'react';
import { connect } from 'react-redux';

import { updateTestValue } from 'actions/test-action';
import { getTestValue, getTestValueRequestStatusAndDetails } from 'reducers/test-reducer'
import logo from 'static-assets/logo.svg';

import './app.css';

export const App = connect(
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
    <div className="App">
      <header className="App-header">
        <div className="display-group">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="display-group">
          <div>Request status: { props.testValueRequestStatus }</div>
          <div>Value: { props.testValue || 0 }</div>
        </div>
        <div className="display-group">
          <Button onClick={ setRandomTestValue }
            variant="contained" >
            Generate new value
          </Button>
        </div>
      </header>
    </div>
  );
});
