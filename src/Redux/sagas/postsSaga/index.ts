import React from "react";// / import { all, call, put, takeLatest,} from "redux-saga/effects"
// import { getAllPostsApi } from "../../api"
// import { getPosts, setLoadingPost,setPosts } from "../../reducers/Post"

// function* getPostsSaga (action:any) {
//  yield put(setLoadingPost(true))

// const {data,status,problem} = yield call (getAllPostsApi, action.payload)

// if(status===200&&data){
//     yield put(setPosts(data.results))
// } else {    console.log('problem',problem)
// }

//  yield put(setLoadingPost(false))
// }
 
// export default function* postsWather () {
//  yield all ([takeLatest(getPosts,getPostsSaga)])

// }