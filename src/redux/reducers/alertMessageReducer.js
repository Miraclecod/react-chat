
export default alertMessage(state = {}, action) {
        switch (action.type) {
            case 'SUCCESS':
                return {
                    message: action.message
                }
            case 'ERROR':
                return {
                    message: action.message
                }
            case 'CLEAR':
                return {}
            default:
                return state
        }
}
