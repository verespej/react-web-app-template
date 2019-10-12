import { testActionCreator } from 'actions/test-action';

export const testReducer = (state = {}, action) => {
  switch (action.type) {
    case testActionCreator.type:
      return {
        ...state,
        testValue: action.testValue,
      };
    default:
      return state;
  }
};
