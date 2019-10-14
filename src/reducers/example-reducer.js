import { REQUEST_STATUS_UNINITIATED } from 'actions/create-action-creator';
import { setExampleValueActionCreator, setExampleValueRequestStatusActionCreator } from 'actions/example-action';

const exampleReducerInitialState = {
  value: null,
  valueRequestStatus: REQUEST_STATUS_UNINITIATED,
  valueRequestStatusDetails: null,
};
export const exampleReducer = (state = exampleReducerInitialState, action) => {
  switch (action.type) {
    case setExampleValueRequestStatusActionCreator.type:
      return {
        ...state,
        valueRequestStatus: action.requestStatus,
        valueRequestStatusDetails: action.details,
      };
    case setExampleValueActionCreator.type:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

export function getExampleValue(state) {
  return state.example.value;
}

export function getExampleValueRequestStatusAndDetails(state) {
  return {
    valueRequestStatus: state.example.valueRequestStatus,
    valueRequestStatusDetails: state.example.valueRequestStatusDetails,
  };
}
