import React from 'react';
import { connect } from 'react-redux';

import { updateTestValue } from 'actions/test-action';
import logo from 'static-assets/logo.svg';

import './app.css';

export const App = connect(
  state => ({
    // TODO: Move this into reducer
    testValue: state.test.testValue,
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
        <img src={logo} className="App-logo" alt="logo" />
        Test value: { props.testValue }
        <button onClick={ setRandomTestValue }>Update test value</button>
      </header>
    </div>
  );
});
