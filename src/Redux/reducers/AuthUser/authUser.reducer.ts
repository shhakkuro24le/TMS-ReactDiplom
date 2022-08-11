import { AuthActions } from './../../actions/authUser.action';

import { SET_AUTH } from "../../types";
const initialState = {
    auth:true,
}

type InitialState = typeof  initialState
export const authReducer = (state : InitialState=initialState,action: AuthActions) => {
    switch(action.type) {
        case SET_AUTH :
            return {
                ...state,
          action:action.payload,
            }
            default:
                return state
    }

}
export default authReducer