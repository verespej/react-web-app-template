import fetch from 'isomorphic-fetch';

import { createActionCreator } from './create-action-creator';

export const testActionCreator = createActionCreator(
  'ACTION_TYPE_SET_TEST_VALUE',
  'testValue',
);

export function updateTestValue() {
  return dispatch => {
    // TODO: Dispatch pending request status

    return fetch('/api/random-number')
      .then(response => {
        if (response.status >= 400) {
          throw new Error(`Error response from server: ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        return dispatch(testActionCreator.create({ testValue: result.value }));
      })
      .catch(err => {
        // TODO: Dispatch error
      });
  };
}
