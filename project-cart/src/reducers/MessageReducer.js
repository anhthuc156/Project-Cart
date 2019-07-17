import { MSG_WELCOME } from "../constants/Message";
import { CHANGE_MESSAGE } from '../constants/ActionTypes';
var initialState = MSG_WELCOME;



const MessageReducer = (state= initialState, action) => {
    
    switch (action.type) {
        case CHANGE_MESSAGE:
            return action.message;
        default:
            return [...state];
    }
}

export default MessageReducer;