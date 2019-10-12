import mockedFetch from 'isomorphic-fetch';

import { updateTestValue } from './test-action';

jest.mock('isomorphic-fetch');

it('calls server and dispatches an action', () => {
  const mockDispatch = jest.fn(() => {});

  mockedFetch.mockResolvedValue({
    json: () => ({ testValue: Math.random() }),
    status: 200,
  });

  const thunk = updateTestValue();
  return thunk(mockDispatch).then(() => {
    expect(mockDispatch.mock.calls.length).toBe(1);
  });
});
