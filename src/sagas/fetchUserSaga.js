import { takeLatest } from "redux-saga/effects"

function* fetchUser(user, password) {
    try{
        const token = yield call("", user, password)
        yield put({type: 'LOGIN_SUCCESS', token})
        return token
    }catch (e){
        yield put({type:'LOGIN_ERROR', e})
    }
}

function* fetchUserSaga() {
    yield takeLatest()
}
export default fetchUserSaga;