import { createStore } from 'redux';

import reducer from '../reducers';

const addPromiseSupport = store => dispatch => action => {
  if(typeof action.then === 'function') {
    return action.then(dispatch);
  }

  return dispatch(action);
};

const addThunkSupport = store => dispatch => action => {
  if(typeof action === 'function') {
    return action(dispatch);
  }

  return dispatch(action);
};

const addLogSupport = store => dispatch => action => {
  console.log('Состояние до', store.getState());
  console.log('Действие', action.type, action);

  dispatch(action);

  console.log('Состояние после', store.getState());
};

const store = createStore(reducer);
const middlewares = [addLogSupport, addPromiseSupport, addThunkSupport]

middlewares.forEach(middleware => store.dispatch = middleware(store)(store.dispatch));

export default store;