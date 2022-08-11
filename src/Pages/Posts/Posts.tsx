import { FC, useEffect, useMemo } from 'react';
import PostCard from '../../Components/PostCard';
import styles from './Posts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAC } from '../../Redux/actions';
import { postsSelector } from '../../Redux/store/selectors';
import { _store } from '../../App';

const Posts: FC = () => {
  const dispath = useDispatch();
  const posts = useSelector(postsSelector);

  useEffect(() => {
    dispath(getPostsAC(_store.posts));
  }, []);

  const memoPostsElements = useMemo(() => {
    return posts.posts?.map((post: any) => <PostCard key={post.id} post={post} />);
  }, [posts.posts]);

  const hasPosts = !!posts.posts?.length;
  if (hasPosts) {
    return <div className={styles.posts}>{memoPostsElements}</div>;
  }
  return <div>no posts...</div>;
};

export default Posts;
