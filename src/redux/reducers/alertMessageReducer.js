import { alertConstant } from "../constant/alertConstant"

export function alertMessageReducer(state = {}, action) {
        switch (action.type) {
            case alertConstant.SUCCESS:
                return {
                    message: action.message
                }
            case alertConstant.ERROR:
                return {
                    message: action.message
                }
            case alertConstant.CLEAR:
                return {}
            default:
                return state
        }
}
