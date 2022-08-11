import { useState } from 'react';

import Link from '../../Components/Link';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import styles from './SignIn.module.css';
import Links from '../../Components/Link';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useInputValue from '../../Utils/useInputValue';
const SighIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, emailHandler] = useInputValue();
  const [password, passwordHandler] = useInputValue();

  const loginHandler = () => {
    const LoginData = {
      email,
      password,
    };
    navigate('/posts', { replace: true, state: location });
  };

  return (
    <div className={styles.login_container}>
      <Input
        className={styles.sigIn_input}
        placeholder="email"
        type="text"
        value={email}
        onChange={emailHandler}></Input>
      <Input
        className={styles.sigIn_input}
        placeholder="password"
        type="password"
        value={password}
        onChange={passwordHandler}></Input>
      <NavLink to="/resset">забыли пароль?</NavLink>
      <Button className={styles.signIn_button} title="sign in" onClick={loginHandler}></Button>
      <div>
        Don’t have an account? <NavLink to="/register">Sign Up</NavLink>
      </div>
    </div>
  );
};

export default SighIn;
