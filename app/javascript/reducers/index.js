import { combineReducers } from 'redux';

import { sparksReducer } from './sparks';

const rootReducer = combineReducers({
    sparks: sparksReducer,
});

export default rootReducer;