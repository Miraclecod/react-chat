
const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGE_SUCCESS';
const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const ADD_USER = 'ADD_USER'

export function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}
