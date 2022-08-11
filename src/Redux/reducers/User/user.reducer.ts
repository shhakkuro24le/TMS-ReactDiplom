import { GET_USER } from './../../types';
const initialState = {
    user:  {
        id: '',
        username: '',
        email: '',
      }
}

const userReducer = ( state = initialState,action:any) => {
switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
}
return state
}

export default userReducer