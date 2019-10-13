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
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>Request status: { props.testValueRequestStatus }</div>
        <div>Test value: { props.testValue }</div>
        <div>
          <button onClick={ setRandomTestValue }>Update test value</button>
        </div>
      </header>
    </div>
  );
});
