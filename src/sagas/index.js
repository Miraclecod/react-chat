import {fetchUserSaga} from "./fetchUserSaga"

export default function* rootSaga() {
    yield all([
        fetchUserSaga
    ])
}