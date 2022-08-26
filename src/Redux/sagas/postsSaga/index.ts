
import { all, takeLatest, put, call } from "redux-saga/effects";
import { getPostsAPI, getPostAPI, getPostsCountAPI } from "../../api";
import { getPosts,
            setPosts, 
            setLoadingPosts, 
            setSelectedPost, 
            setSelectedPostLoading, 
            setTotalAllPostsCounter,
            setTotalAllPostsCounterLoading } from '../../reducers/Post/posts.reducer';

function* getPostsSaga(action: any) {
    yield put(setLoadingPosts(true));
    const { data, status, problem } = yield call(getPostsAPI, action.payload);

    if(status === 200 && data) {
        yield put(setPosts(data))
    } else {
        console.log('Error:', problem)
    } 
    
    yield put(setLoadingPosts(false));
};

function* getSelectedPostSaga(action: any) {
    yield put(setSelectedPostLoading(true));
    const { data, status, problem } = yield call(getPostAPI, action.payload);

    if (status === 200 && data) {
        yield put(setSelectedPost(data))
    } else {
        console.log('Eerror:', problem)
    }

    yield put(setSelectedPostLoading(false));
};

function* getTotalAllPostsCounterSaga(action: any) {
    yield put(setTotalAllPostsCounterLoading(true));
    const { data, status, problem } = yield call(getPostsCountAPI, action.payload);

    if (status === 200 && data) {
        yield put(setTotalAllPostsCounter(data))
    } else {
        console.log('Error:', problem)
    }

    yield put(setTotalAllPostsCounterLoading(false));
};

export default function* postsWatcher() {
    yield all([
        takeLatest(getPosts, getPostsSaga),
        takeLatest(setSelectedPost, getSelectedPostSaga),
        takeLatest(setTotalAllPostsCounter, getTotalAllPostsCounterSaga),
    ]);
};