export const GET_SPARKS_REQUEST = 'GET_SPARKS_REQUEST';
export const GET_SPARKS_SUCCESS = 'GET_SPARKS_SUCCESS';

export function getSparks() {
    console.log('getSparks() Action!!')
    return dispatch => {
        dispatch({ type: GET_SPARKS_REQUEST });
        return fetch('/api/sparks.json')
            .then(response => response.json())
            .then(json => dispatch(getSparksSuccess(json)))
            .catch(error => console.log(error));
    };
};

export function getSparksSuccess(json) {
    return {
        type: GET_SPARKS_SUCCESS,
        json
    };
};