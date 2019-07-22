// Initialize Redux state and a reducer

import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    sparks: []
};

function rootReducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        case "GET_THINGS_SUCCESS":
            return { sparks: action.json.sparks };
    }
    return state;
};

export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
        );
    return store;
};