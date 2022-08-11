import styles from './SohialButtons.module.css';
import facebookIcons from '../../../Assets/Facebok.svg';
import twitterIcons from '../../../Assets/twitter.svg';
const SohialButtons = () => {
  return (
    <div>
      <button className={styles.sohial_buttons}>
        <img src={facebookIcons} alt="facebook"></img>
      </button>
      <button className={styles.sohial_buttons}>
        <img src={twitterIcons} alt="facebook"></img>
      </button>
    </div>
  );
};
export default SohialButtons;
