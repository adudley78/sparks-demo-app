interface Spark {
    name: string,
    guid: string
};

const initialState: Spark[] = [];

export function sparksReducer(state = initialState, action): Spark[] {
    console.log("sparksReducer type:", action.type);
    switch (action.type) {
        case "GET_SPARKS_SUCCESS":
            return action.json.sparks;
        /**
         * Uncomment below to generate a Typescript error by
         * having thingsReducer(), which is supposed to return Thing[],
         * return 1 (an Int)
         */
        // default:
        //   return 1;
    }
    return state;
}