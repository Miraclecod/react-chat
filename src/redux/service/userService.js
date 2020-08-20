import * as firebase from "firebase";

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
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
        })
}

function logout() {
    localStorage.removeItem('user');
    firebase.auth().signOut()
        .catch(e)
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(user)
    };
    return fetch('/', requestOptions).then(res);
    //return firebase.auth().createUserWithEmailAndPassword(user);
}

function deleteUser(user) {
    const requestOptions = {
        method: 'DELETE',
        body: JSON.stringify(user)
    }
    return fetch('/', requestOptions.then(res));
}