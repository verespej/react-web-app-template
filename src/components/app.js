import React from 'react';
import { connect } from 'react-redux';

import { setTestValue } from 'actions/test-action';
import logo from 'static-assets/logo.svg';

import './app.css';

export const App = connect(
  state => ({
    // TODO: Move this into reducer
    testValue: state.test.testValue,
  }),
  {
    setTestValue: testValue => setTestValue(testValue),
  },
)(props => {
  function setRandomTestValue() {
    props.setTestValue(Math.random().toString())
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
