import { call, put, takeLatest } from "redux-saga/effects"

function* workGetUser(user, password) {
    try{
        const token = yield call("", user, password)
        yield put({type: 'LOGIN_SUCCESS', token})
        return token
    }catch (e){
        yield put({type:'LOGIN_ERROR', e})
    }
}

function* watchUser() {
    yield takeLatest()
}

export default watchUser;