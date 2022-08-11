import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';
const PostCard = (props) => {
  const { post } = props;

  return (
    <div className={styles.post_card}>
      <img className={styles.post_img} src={post.imageUrl} alt="rfhnjxrf gjcnf"></img>
      <div className={styles.post_data}>{post.updatedAt}</div>
      <Link to={`/post/${post.id}`}>{post.summary}</Link>
    </div>
  );
};

export default PostCard;
