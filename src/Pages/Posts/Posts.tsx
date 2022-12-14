import { FC, useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import PostCard from '../../Components/PostCard';
import styles from './Posts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPosts,
  PostsSelectors,
  setSinglePost,
  setTotalAllPostsCounter,
} from '../../Redux/reducers/Post/posts.reducer';
import { useParams } from 'react-router-dom';
import { PostModel } from '../../types/post.model';

import Pagination from '../../Components/Pagination';
import Loader from '../../Components/Loader';
import Sorting from '../../Components/Sorting';
import Input from '../../Components/Input';
import { selectFilter, setCategoryId } from '../../Redux/reducers/Filter/filter.reducer';
import React from 'react';

const Posts: FC = () => {
  const allPosts = useSelector(PostsSelectors.getPosts);
  const post = useSelector(PostsSelectors.getSinglePost);
  const isPostsLoading = useSelector(PostsSelectors.getPostsLoading);
  const totalCount = useSelector(PostsSelectors.getTotalAllPostsCounter);
  const { categoryId } = useSelector(selectFilter);

  const [_limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [_sort, setSort] = useState(0);
  const pagesCount = Math.ceil(totalCount / _limit);

  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const _start = (page - 1) * _limit;
    dispatch(getPosts({ _limit, _start }));
  }, [_limit, page]);

  useEffect(() => {
    dispatch(setSinglePost(id));
  }, []);

  useEffect(() => {
    dispatch(setTotalAllPostsCounter({}));
  }, []);

  const PrevClick = () => setPage(page - 1);
  const NextClick = () => setPage(page + 1);
  const PageClick = () => {
    const _start = (page - 1) * _limit;
    dispatch(getPosts({ _limit, _start }));
  };
  const LastClick = () => setPage(pagesCount);
  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  useEffect(() => {
    dispatch(getPosts({ _sort }));
  }, [categoryId]);

  const [valueSearch, setValueSearch] = useState('');
  const searchPosts = allPosts.filter((post) => {
    return post.title.toLowerCase().includes(valueSearch.toLowerCase());
  });
  const allPostsElements = useMemo(() => {
    return searchPosts?.map((post: PostModel) => <PostCard key={post.id} post={post} />);
  }, [searchPosts]);

  return (
    <>
      {isPostsLoading ? (
        <div className={cn(styles.loader)}>
          <Loader />
        </div>
      ) : (
        <div className={cn(styles.posts_container)}>
          <h1 className={cn(styles.posts_title)}>Blog</h1>
          <div className={cn(styles.sort_container)}>
            <Sorting value={categoryId} onChangeCategory={onChangeCategory} />
            <Input
              className={cn(styles.search_input)}
              type="search"
              placeholder="search..."
              onChange={(event) => setValueSearch(event.target.value)}></Input>
          </div>
          <div className={cn(styles.posts_content)}>
            <div className={cn(styles.posts)}>{allPostsElements}</div>
          </div>
          <Pagination
            pageNum={page}
            pagesCount={pagesCount}
            PrevClick={PrevClick}
            NextClick={NextClick}
            PageClick={PageClick}
            LastClick={LastClick}
          />
        </div>
      )}
    </>
  );
};

export default Posts;
