import { createStore } from 'redux';

import reducer from '../reducers';

function addPromiseSupport(store) {
  return dispatch => {
    return action => {
      if(typeof action.then === 'function') {
        return action.then(dispatch);
      }

      return dispatch(action);
    };
  };
}

function addThunkSupport(store) {
  return dispatch => {
    return action => {
      if(typeof action === 'function') {
        return action(dispatch);
      }

      return dispatch(action);
    };
  };
}

function addLogSupport(store) {
  return dispatch => {
    return action => {
      console.log('Состояние до', store.getState());
      console.log('Действие', action.type, action);
  
      dispatch(action);
  
      console.log('Состояние после', store.getState());
    };
  };
}

const store = createStore(reducer);
const middlewares = [addLogSupport, addPromiseSupport, addThunkSupport]

middlewares.forEach(middleware => store.dispatch = middleware(store)(store.dispatch));

export default store;