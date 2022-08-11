import { SET_CURRENT_POST } from './../types';
import { GET_POSTS } from '../types';
export const getPostsAC = (payload:any) => {
    return {
        type: GET_POSTS ,
payload

    }
}

export const setCurrentPostAC = (payload:any)=> {
    return {
        type: SET_CURRENT_POST,
        payload,
    }

}
// const addUser = {type:'posts/ADD_USER', payload:[]}
