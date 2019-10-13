import fetch from 'isomorphic-fetch';

import {
  createActionCreator,
  createRequestStatusActionCreator,
  REQUEST_STATUS_ERROR,
  REQUEST_STATUS_FULFILLED,
  REQUEST_STATUS_PENDING,
} from './create-action-creator';

export const setTestValueActionCreator = createActionCreator(
  'ACTION_TYPE_SET_TEST_VALUE',
  'value',
);

export const setTestValueRequestStatusActionCreator = createRequestStatusActionCreator(
  'ACTION_TYPE_SET_TEST_VALUE_REQUEST_STATUS'
);

export function updateTestValue() {
  return dispatch => {
    dispatch(setTestValueRequestStatusActionCreator.create({
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
        dispatch(setTestValueRequestStatusActionCreator.create({
          requestStatus: REQUEST_STATUS_FULFILLED,
          details: null,
        }));
        dispatch(setTestValueActionCreator.create({ value: result.value }));
      })
      .catch(err => {
        dispatch(setTestValueRequestStatusActionCreator.create({
          requestStatus: REQUEST_STATUS_ERROR,
          details: err,
        }));
      });
  };
}
