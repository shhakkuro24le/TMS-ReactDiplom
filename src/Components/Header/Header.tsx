import cn from 'classnames';
import logo from '../../Assets/Logo.svg';
import userLogo from '../../Assets/userIcon.svg';
import styles from './Header.module.css';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const navigate = useNavigate();
  const navigateLogOut = () => {
    navigate('/');
  };
  return (
    <div className={styles.header}>
      <img className={cn(styles.img)} src={logo} alt="logo"></img>
      <div className={cn(styles.header_title)}>
        <h1>
          <span>W</span>
          <span>E</span>
          <span>L</span>
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
          <span></span>
          <span>T</span>
          <span>O</span>
          <span></span>
          <span>B </span>
          <span>L</span>
          <span>O</span>
          <span>G</span>
        </h1>
      </div>
      <button className={cn(styles.user_button)} onClick={navigateLogOut}>
        {' '}
        <img className={cn(styles.userImg)} src={userLogo} alt="userIcon"></img>
      </button>
    </div>
  );
};

export default Header;
