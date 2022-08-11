import React, { FC } from 'react';
import classNames from 'classnames';
import UserName from '../UserName';
import logo from '../../Assets/Logo.svg';

import styles from './Header.module.css';
import Input from '../Input';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoSelector, userSelector } from '../../Redux/store/selectors';
// import type {UserModel} from '../../types/user.model'
// interface HeaderProps = {
// user: UserModel,
// };

const Header: FC = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(userInfoSelector);
  console.log(userInfo);
  return (
    <div className={styles.header}>
      <img className={classNames(styles.img)} src={logo} alt="логотип"></img>

      <Input type="text" placeholder="search"></Input>

      <UserName name={userInfo?.name} />
    </div>
  );
};

export default Header;
