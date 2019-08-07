export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';

export function getComments() {
    console.log('getComments() Action!')
    return dispatch => {
        dispatch({ type: GET_COMMENTS_REQUEST });
        return fetch(`api/comments.json`)
        .then(response => response.json())
        .then(json => dispatch(getCommentsSuccess(json)))
        .catch(error => console.log(error));
    };
};

export function getCommentsSuccess(json) {
    return {
        type: GET_COMMENTS_SUCCESS,
        json
    };
};