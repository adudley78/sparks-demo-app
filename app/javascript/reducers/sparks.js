const initialState = {
    sparks: []
}

export function sparksReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case "GET_SPARKS_SUCCESS":
            return { sparks: action.json.sparks };
    }
    return state;
}