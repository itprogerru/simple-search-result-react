import { users as usersData } from '../../constants/users'
import {USER_SEARCH, USER_SEARCH_ASYNC} from "../constants/users";


const initialState = {
    users: usersData,

};


export default function users (state = initialState, action)  {
    switch (action.type) {
        case USER_SEARCH: {
            const newState = usersData.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()) || item.phone.toLowerCase().includes(action.payload.toLowerCase()));
            return {users: newState};
        }
        case USER_SEARCH_ASYNC: {
            const newState = usersData.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()) || item.phone.toLowerCase().includes(action.payload.toLowerCase()));
            return {users: newState};
        }
        default:
            return state

    }
}