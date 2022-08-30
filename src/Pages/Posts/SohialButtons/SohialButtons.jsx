/* eslint-disable react/jsx-no-target-blank */
import styles from './SohialButtons.module.css';
import facebookIcons from '../../../Assets/Facebok.svg';
import twitterIcons from '../../../Assets/twitter.svg';
const SohialButtons = () => {
  return (
    <div className={styles.social_content}>
      <a href="https://www.facebook.com/" target="_blank" className={styles.social_buttons}>
        <img src={facebookIcons} alt="facebook"></img>
      </a>
      <a href="https://twitter.com/?lang=ru" target="_blank" className={styles.social_buttons}>
        <img src={twitterIcons} alt="facebook"></img>
      </a>
      <a href="https://www.google.ru/" target="_blank" className={styles.social_buttons_link}>
        ...
      </a>
    </div>
  );
};
export default SohialButtons;
