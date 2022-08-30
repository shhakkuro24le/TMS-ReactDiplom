
import { all, takeLatest, put, call } from "redux-saga/effects";
import { getPostsAPI, getPostAPI, getPostsCountAPI } from "../../api";
import { getPosts,
            setPosts, 
            setLoadingPosts, 
            setSinglePost, 
            setSinglePostLoading, 
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
    yield put(setSinglePostLoading(true));
    const { data, status, problem } = yield call(getPostAPI, action.payload);

    if (status === 200 && data) {
        yield put(setSinglePost(data))
    } else {
        console.log('Eerror:', problem)
    }

    yield put(setSinglePostLoading(false));
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
        takeLatest(setSinglePost, getSelectedPostSaga),
        takeLatest(setTotalAllPostsCounter, getTotalAllPostsCounterSaga),
    ]);
};