export const GET_SPARKS_REQUEST = 'GET_SPARKS_REQUEST';
export const GET_SPARKS_SUCCESS = 'GET_SPARKS_SUCCESS';
export const ADD_SPARK = 'ADD_SPARK';

export function getSparks() {
    console.log('getSparks() Action!')
    return dispatch => {
        dispatch({ type: GET_SPARKS_REQUEST });
        return fetch(`api/sparks.json`)
            .then(response => response.json())
            .then(json => dispatch(getSparksSuccess(json)))
            .catch(error => console.log(error));
    };
};

export function createSpark(spark) {
    console.log('createSpark() Action!')
    return dispatch => {
        return fetch(`api/sparks.json`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ spark: spark })
        })
            .then(response => response.json())
            .then(spark => {
                dispatch(addSpark(spark))
                // dispatch(resetSparkForm())
            })
            .catch(error => console.log(error))
    };
}

export function getSparksSuccess(json) {
    return {
        type: GET_SPARKS_SUCCESS,
        json
    };
};

export function addSpark(spark) {
    return {
        type: ADD_SPARK,
        spark
    };
};