import { REQUEST_STATUS_UNINITIATED } from 'actions/create-action-creator';
import { setTestValueActionCreator, setTestValueRequestStatusActionCreator } from 'actions/test-action';

const testReducerInitialState = {
  value: null,
  valueRequestStatus: REQUEST_STATUS_UNINITIATED,
  valueRequestStatusDetails: null,
};
export const testReducer = (state = testReducerInitialState, action) => {
  switch (action.type) {
    case setTestValueRequestStatusActionCreator.type:
      return {
        ...state,
        valueRequestStatus: action.requestStatus,
        valueRequestStatusDetails: action.details,
      };
    case setTestValueActionCreator.type:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

export function getTestValue(state) {
  return state.test.value;
}

export function getTestValueRequestStatusAndDetails(state) {
  return {
    valueRequestStatus: state.test.valueRequestStatus,
    valueRequestStatusDetails: state.test.valueRequestStatusDetails,
  };
}
