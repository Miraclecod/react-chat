import {auth} from "../firebase"
// Retrieve services via the defaultApp variable...



export const userServices = {
    login,
    logout,
    register
}

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({email, password})
    };
    // return fetch('/', requestOptions)
    //     .then(res)
    //     .then(user => {
    //         localStorage.setItem('user', JSON.stringify(user));
    //         return user;
    //     })
    return auth.signInWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user.user.refreshToken))
            return user.user
        }).catch(function(error){
            console.log(error);
        });
}

function logout() {
    localStorage.removeItem('user');
    auth.signOut()
        .catch(e)
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(user)
    };
    //return fetch('/', requestOptions).then(res);
    return auth.createUserWithEmailAndPassword(user);
}

function deleteUser(user) {
    const requestOptions = {
        method: 'DELETE',
        body: JSON.stringify(user)
    }
    return fetch('/', requestOptions.then(res));
}