import mockedFetch from 'isomorphic-fetch';

import { REQUEST_STATUS_FULFILLED } from './create-action-creator';
import {
  setExampleValueActionCreator,
  setExampleValueRequestStatusActionCreator,
  updateExampleValue,
} from './example-action';

jest.mock('isomorphic-fetch');

it('calls server and dispatches an action', () => {
  const mockDispatch = jest.fn(() => {});

  mockedFetch.mockResolvedValue({
    json: () => ({ value: Math.random() }),
    status: 200,
  });

  const thunk = updateExampleValue();
  return thunk(mockDispatch).then(() => {
    let dispatchedRequestFulfilled = false;
    let dispatchedSetExampleValue = false;

    mockDispatch.mock.calls.forEach(call => {
      if (call[0].type === setExampleValueRequestStatusActionCreator.type &&
        call[0].requestStatus === REQUEST_STATUS_FULFILLED) {
        dispatchedRequestFulfilled = true;
      }
      if (call[0].type === setExampleValueActionCreator.type) {
        dispatchedSetExampleValue = true;
      }
    })

    expect(dispatchedRequestFulfilled).toBe(true);
    expect(dispatchedSetExampleValue).toBe(true);
  });
});
