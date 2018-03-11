import { createStore } from 'redux';

import reducer from '../reducers';

function addPromiseSupport(store) {
  const dispatch = store.dispatch;

  return action => {
    if(typeof action.then === 'function') {
      return action.then(dispatch);
    }

    return dispatch(action);
  };
}

function addThunkSupport(store) {
  const dispatch = store.dispatch;

  return action => {
    if(typeof action === 'function') {
      return action(dispatch);
    }

    return dispatch(action);
  };
}

function addLogSupport(store) {
  const dispatch = store.dispatch;

  return action => {
    console.log('Состояние до', store.getState());
    console.log('Действие', action.type, action);

    dispatch(action);

    console.log('Состояние после', store.getState());
  };
}

const store = createStore(reducer);

store.dispatch = addLogSupport(store);
store.dispatch = addPromiseSupport(store);
store.dispatch = addThunkSupport(store);

export default store;