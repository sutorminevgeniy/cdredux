import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';

const addPromiseSupport = store => next => action => {
  if(typeof action.then === 'function') {
    return action.then(next);
  }

  return next(action);
};

const addThunkSupport = store => next => action => {
  if(typeof action === 'function') {
    return action(next);
  }

  return next(action);
};

const addLogSupport = store => next => action => {
  console.log('Состояние до', store.getState());
  console.log('Действие', action.type, action);

  let result = next(action);

  console.log('Состояние после', store.getState());

  return result;
};

const store = createStore(reducer, applyMiddleware(addLogSupport, addPromiseSupport, addThunkSupport));
;

export default store;