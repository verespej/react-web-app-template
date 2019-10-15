import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { updateExampleValue } from 'actions/example-action';
import { RouteButton } from 'components/route-button';
import { ROUTE_PATH_HOME_SCREEN } from 'helpers/constants';
import {
  getExampleValue,
  getExampleValueAsPercent,
  getExampleValueRequestStatusAndDetails,
} from 'reducers/example-reducer';

import commonStyles from './common-styles.module.css';

function _ExampleScreen(props) {
  return (
    <React.Fragment>
      <div className={ commonStyles['display-group'] }>
        <div><b>Request status:</b> { props.valueRequestStatus }</div>
        <div><b>Value:</b> { props.value || 0 }</div>
        <div><b>Percent:</b> { props.valueAsPercent }%</div>
      </div>
      <div className={ commonStyles['display-group'] }>
        <Button onClick={ props.updateValue } variant="contained">
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
}

_ExampleScreen.propTypes = {
  updateValue: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  valueAsPercent: PropTypes.number.isRequired,
  valueRequestStatus: PropTypes.string.isRequired,
};

export const ExampleScreen = connect(
  state => ({
    value: getExampleValue(state),
    valueAsPercent: getExampleValueAsPercent(state),
    valueRequestStatus: getExampleValueRequestStatusAndDetails(state).valueRequestStatus,
  }),
  {
    updateValue: () => updateExampleValue(),
  },
)(_ExampleScreen);
