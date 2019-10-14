import fetch from 'isomorphic-fetch';

import {
  createActionCreator,
  createRequestStatusActionCreator,
  REQUEST_STATUS_ERROR,
  REQUEST_STATUS_FULFILLED,
  REQUEST_STATUS_PENDING,
} from './create-action-creator';

export const setExampleValueActionCreator = createActionCreator(
  'ACTION_TYPE_SET_EXAMPLE_VALUE',
  'value',
);

export const setExampleValueRequestStatusActionCreator = createRequestStatusActionCreator(
  'ACTION_TYPE_SET_EXAMPLE_VALUE_REQUEST_STATUS'
);

export function updateExampleValue() {
  return dispatch => {
    dispatch(setExampleValueRequestStatusActionCreator.create({
      requestStatus: REQUEST_STATUS_PENDING,
      details: null,
    }));

    return fetch('/api/random-number')
      .then(response => {
        if (response.status >= 400) {
          throw new Error(`Error response from server: ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        dispatch(setExampleValueRequestStatusActionCreator.create({
          requestStatus: REQUEST_STATUS_FULFILLED,
          details: null,
        }));
        dispatch(setExampleValueActionCreator.create({ value: result.value }));
      })
      .catch(err => {
        dispatch(setExampleValueRequestStatusActionCreator.create({
          requestStatus: REQUEST_STATUS_ERROR,
          details: err,
        }));
      });
  };
}
