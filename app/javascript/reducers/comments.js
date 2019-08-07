const initialState = {
    comments: []
};

export function commentsReducer( state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case "GET_COMMENTS_SUCCESS":
            return { comments: action.json };
        default:
            return state;
    };
};