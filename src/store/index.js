import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import localStorage from '../middleware/local-storage'

import reducer from '../reducers';

const store = createStore(reducer, applyMiddleware(thunk, promise, localStorage, logger));

export default store;