
export const  alertMessageActions = {
    success,
    error,
    clear
}

function success(message) {
    return {
        type: 'SUCCESS',
        message
    }
}

function error(message) {
    return {
        type: 'ERROR',
        message
    }
}

function clear() {
    return {
        type: 'CLEAR'
    }
}