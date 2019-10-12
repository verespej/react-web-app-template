import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import { rootReducer } from 'reducers';

export function configureReduxStore(preloadedState) {
  // Can add more middleware here, if desired
  const middleware = [
    process.env.NODE_ENV !== 'production' ? require('redux-immutable-state-invariant').default() : undefined,
    reduxThunk,
  ];

  // Can add more enhancers here, if desired
  const composeEnhancersFunc = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedEnhancers = composeEnhancersFunc(
    applyMiddleware(...middleware)
  );

  return createStore(rootReducer, preloadedState, composedEnhancers);
}
