import mockedFetch from 'isomorphic-fetch';

import { REQUEST_STATUS_FULFILLED } from './create-action-creator';
import {
  setTestValueActionCreator,
  setTestValueRequestStatusActionCreator,
  updateTestValue,
} from './test-action';

jest.mock('isomorphic-fetch');

it('calls server and dispatches an action', () => {
  const mockDispatch = jest.fn(() => {});

  mockedFetch.mockResolvedValue({
    json: () => ({ testValue: Math.random() }),
    status: 200,
  });

  const thunk = updateTestValue();
  return thunk(mockDispatch).then(() => {
    let dispatchedRequestFulfilled = false;
    let dispatchedSetTestValue = false;

    mockDispatch.mock.calls.forEach(call => {
      if (call[0].type === setTestValueRequestStatusActionCreator.type &&
        call[0].requestStatus === REQUEST_STATUS_FULFILLED) {
        dispatchedRequestFulfilled = true;
      }
      if (call[0].type === setTestValueActionCreator.type) {
        dispatchedSetTestValue = true;
      }
    })

    expect(dispatchedRequestFulfilled).toBe(true);
    expect(dispatchedSetTestValue).toBe(true);
  });
});
