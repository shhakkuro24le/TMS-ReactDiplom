import { FC, useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SohialButtons from '../Posts/SohialButtons';
import styles from './Post.module.css';
import cn from 'classnames';
import { PostModel } from '../../types/post.model';
import { getPosts, PostsSelectors, setSinglePost } from '../../Redux/reducers/Post/posts.reducer';
import PostCard from '../../Components/PostCard';

const Post: FC = () => {
  const dispatch = useDispatch();
  const post = useSelector(PostsSelectors.getSinglePost);
  const isSelectedPostLoading = useSelector(PostsSelectors.getSinglePostLoading);
  const allPosts = useSelector(PostsSelectors.getPosts);
  const { postId } = useParams<{ postId: string }>();

  useEffect(() => {
    dispatch(
      getPosts({
        _limit: 12,
        _start: 0,
      }),
    );
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (postId) {
      dispatch(setSinglePost(postId));
    }
    window.scrollTo(0, 0);
  }, [postId]);

  const anotherPosts = useMemo(() => {
    return allPosts?.slice(3, 6).map((post: PostModel) => <PostCard key={postId} post={post} />);
  }, [allPosts]);

  return (
    <>
      <div className={cn(styles.post_container)}>
        <div className={cn(styles.post_navLink)}>
          <Link className={cn(styles.link_main)} to={'/posts'}>
            Home
          </Link>
          <div>/{post?.id}</div>
        </div>
        <h2 className={cn(styles.post_title)}>{post?.title}</h2>
        <img className={styles.post_img} src={post?.imageUrl} alt="post img"></img>
        <p className={cn(styles.post_summary)}>{post?.summary}</p>
        <SohialButtons />
      </div>
      <div className={cn(styles.another_posts)}>{anotherPosts}</div>
    </>
  );
};
export default Post;
