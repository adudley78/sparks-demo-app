const initialState = {
    sparks: []
};

export function sparksReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case "GET_SPARKS_SUCCESS":
            return { sparks: action.json };
        case "ADD_SPARK":
            return { spark: action.json };
        default:
            return state;
    };
};


// { 
//     ...state, sparks:action.json
//     }