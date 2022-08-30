

import { PostModel} from '../../../types/post.model';
import { RootState } from './../../store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
    allPosts: any[];
    isPostsLoading: boolean;
    singlePost: PostModel | null;
    isSinglePostLoading: boolean;
    totalAllPostsCounter: number;
    isTotalAllPostsCounterLoading: boolean;
};

const initialState: InitialStateType = {
    allPosts: [],
    isPostsLoading: false,
    singlePost: null,
    isSinglePostLoading: false,
    totalAllPostsCounter: 0,
    isTotalAllPostsCounterLoading: false,
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        getPosts: (state: any, action:  PayloadAction<any>) => {},
        setLoadingPosts:(state: any, action: PayloadAction<boolean>) => {
            state.isPostsLoading = action.payload;
        },
        setPosts: (state: any, action: PayloadAction<any[]>) => {
            state.allPosts = action.payload;
        },
        setSinglePost: (state: any, action: any) => {
            state.singlePost = action.payload;
        },
        setSinglePostLoading: (state: any, action: PayloadAction<boolean>) => {
            state.isSinglePostLoading = action.payload;
        },
        setTotalAllPostsCounter: (state: any, action: any) => {
            state.totalAllPostsCounter = action.payload;
        },
        setTotalAllPostsCounterLoading: (state: any, action: any) => {
            state.isTotalAllPostsCounterLoading = action.payload;
        },
    },
});

export const { 
    getPosts, 
    setLoadingPosts, 
    setPosts, 
    setSinglePost, 
    setSinglePostLoading ,
    setTotalAllPostsCounter,
    setTotalAllPostsCounterLoading,
} = postsSlice.actions;

const reducer = postsSlice.reducer;

export default reducer;

export const PostsSelectors = {
    getPosts: (state: RootState) => state.posts.allPosts,
    getPostsLoading: (state: RootState) => state.posts.isPostsLoading,
    getSinglePost: (state: RootState) => state.posts.singlePost,
    getSinglePostLoading: (state: RootState) => state.posts.isSinglePostLoading,
    getTotalAllPostsCounter: (state: RootState) => state.posts.totalAllPostsCounter,
    getTotalAllPostsCounterLoading: (state: RootState) => state.posts.isTotalAllPostsCounterLoading,
};