import { createActionCreator } from './create-action-creator'

export const testActionCreator = createActionCreator(
  'ACTION_TYPE_SET_TEST_VALUE',
  'testValue',
);

export function setTestValue(testValue) {
  return dispatch => {
    dispatch(testActionCreator.create({ testValue }));
  };
}
