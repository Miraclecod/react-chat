

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_MESSAGES_REQUEST':
            return{
                loggedIn: true,
                user: action.user
            };
        case 'FETCH_MESSAGE_SUCCESS':
            return{
              loggedIn: true,
              user: action.user
            };
        case 'FETCH_MESSAGES_FAILURE':
            return {};
        case 'LOGOUT':
            return {};
        default:
            return state
    }
}