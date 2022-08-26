import { FC, useState } from 'react';

import Input from '../Input';
import Button from '../Button';
import styles from './SignInForm.module.css';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
export interface SignInProps {
  loginClick: (email: string, password: string) => void;
}
const SignInForm: FC<SignInProps> = ({ loginClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPaasword] = useState('');
  return (
    <div className={cn(styles.login_wrapper)}>
      <h1>Sign In</h1>
      <div className={cn(styles.login_container)}>
        <div>Email</div>
        <Input
          className={cn(styles.sigIn_email)}
          placeholder="email"
          type="text"
          value={email}
          onChange={(event: any) => setEmail(event.target.value)}></Input>
        <div>Password</div>
        <Input
          className={cn(styles.sigIn_password)}
          placeholder="password"
          type="password"
          value={password}
          onChange={(event: any) => setPaasword(event.target.value)}></Input>

        <NavLink className={cn(styles.resset_div)} to="/resset">
          Forgot password?
        </NavLink>
        <Button
          className={cn(styles.signIn_button)}
          title="sign in"
          onClick={() => loginClick(email, password)}></Button>
        <p>
          Don’t have an account?{' '}
          <NavLink className={cn(styles.register_div)} to="/register">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default SignInForm;
