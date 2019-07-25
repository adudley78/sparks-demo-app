import { combineReducers } from 'redux';

import { sparksReducer } from './sparks';

const rootReducer = combineReducers({
    sparksReducer,
});

export default rootReducer;