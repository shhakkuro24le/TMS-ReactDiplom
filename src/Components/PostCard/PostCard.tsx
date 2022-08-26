import { FC } from 'react';
import { PostModel } from '../../types/post.model';
import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';
import classNames from 'classnames';

type PostCardProps = {
  post: PostModel;
};
const PostCard: FC<PostCardProps> = (props) => {
  const { post } = props;
  return (
    <div className={styles.post_card}>
      <Link to={`/post/${post.id}`}>
        <img className={styles.post_img} src={post.imageUrl} alt="rfhnjxrf gjcnf"></img>
      </Link>
      <div className={classNames(styles.post_content)}>
        <div className={styles.post_data}>{post.publishedAt}</div>
        <div className={classNames(styles.post_title)}>{post.title}</div>
      </div>
    </div>
  );
};

export default PostCard;
