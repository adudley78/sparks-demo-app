import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// const initialState = {
//     sparks: []
// };

import rootReducer from "./reducers";

export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(
                thunk,
            )
        )
    );
    return store;
}