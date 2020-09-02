import {auth, database} from "../firebase"

export const userServices = {
    login,
    logout,
    register,
    allDialog
}

function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user.user.refreshToken))
            return user.user
        }).catch(function(error){
            return error
        });
}

function logout() {
    localStorage.removeItem('user');
    auth.signOut()
        .catch()
}

function register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

function deleteUser(user) {
    const requestOptions = {
        method: 'DELETE',
        body: JSON.stringify(user)
    }
    return fetch('/', requestOptions.then(res));
}

function checkToken() {
    auth.currentUser.getIdToken(true).then(function (idToken){

    }).catch(function (error) {

    })
}

function allDialog() {
    let arr = [];
    database.ref("chats").on("value", function(snapshot){
        arr.push(snapshot.val());
        snapshot.forEach(function (childSnapshot){
            arr.push(childSnapshot.val());
        })
    })
    return arr;
}