import {USER_SEARCH, USER_SEARCH_ASYNC} from "../constants/users";

export const searchUser = (value) => {
    return {
        type: USER_SEARCH,
        payload: value
    }
}

export const searchUserAsync = (value) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: USER_SEARCH_ASYNC,
                payload: value
            })
        }, 5000)
    }
}