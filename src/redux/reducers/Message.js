
export function Message(state = [], action) {
    switch (action.type) {
        case "ALL_DATA":
            return{
                //...state, action.payload
            }
        default:
            return state
    }
}