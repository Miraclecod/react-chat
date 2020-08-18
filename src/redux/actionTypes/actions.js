
export const FETCH_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGE_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const ADD_USER = 'ADD_USER'

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: user
    };
}

export function login(email, password) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({email, password})
    };
    return fetch('/', requestOptions)
        .then(res)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        })
}

export function logout() {
    localStorage.removeItem('user');
}

export function register(user) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(user)
    };
    return fetch('/', requestOptions).then(res);
}



