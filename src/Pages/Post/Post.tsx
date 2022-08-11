import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SohialButtons from '../Posts/SohialButtons';
import styles from './Post.module.css';
import { setCurrentPostAC } from '../../Redux/actions';
import { PostModel } from '../../types/post.model';
import { postsSelector } from '../../Redux/store/selectors';
// type postProps = {
//   title?: string;
//   imageUrl?: string;
//   text?: string;
// };

const Post: FC = () => {
  const dispatch = useDispatch();
  const { postId } = useParams<{ postId: string }>();

  const posts = useSelector(postsSelector);

  useEffect(() => {
    dispatch(setCurrentPostAC(Number(postId)));
  }, []);

  return (
    <div>
      <h2>{posts.currentPost?.title}</h2>
      <img className={styles.post_img} src={posts.currentPost?.imageUrl} alt="post img"></img>
      <p>{posts.currentPost?.summary}</p>
      <SohialButtons />
    </div>
  );
};
export default Post;
