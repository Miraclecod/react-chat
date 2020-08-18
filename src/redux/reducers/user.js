const initialState = { email: '', password: '' }

export  default function user(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER':
            return 1
        default:
            return state
    }
}