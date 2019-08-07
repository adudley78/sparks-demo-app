import { combineReducers } from 'redux';
import { sparksReducer } from './sparks';
import { commentsReducer } from './comments';

const rootReducer = combineReducers({
    sparksReducer, commentsReducer,
});

export default rootReducer;