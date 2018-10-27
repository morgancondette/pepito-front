import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

export function configureStore(): Store {
  let middleware = applyMiddleware(reduxThunk);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, middleware);

  if (module.hot) {
    module.hot.accept('./root-reducer', () => {
      const nextReducer = require('./root-reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}