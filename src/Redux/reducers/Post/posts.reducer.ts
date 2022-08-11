import { PostModel } from './../../../types/post.model';
import { GET_POSTS, SET_CURRENT_POST } from "../../types"

const initialState = {
    posts:[],
    currentPost:null,

}
const postReducer = ( state = initialState,action:any) => {
    switch (action.type) {
        case GET_POSTS : 
        return {
            ...state,
            posts:action.payload,
        }
        case SET_CURRENT_POST:

            return {
                ...state,
                currentPost:state.posts.find((p:PostModel) => p.id === action.payload),
            }
                default:            
                return state
        }}

export default postReducer