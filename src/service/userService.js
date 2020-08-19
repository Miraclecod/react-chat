export const userActions = {
    login,
    logout,
    register
}

function login(email, password) {
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

function logout() {
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(user)
    };
    return fetch('/', requestOptions).then(res);
}
