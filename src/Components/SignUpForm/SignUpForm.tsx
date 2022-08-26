import { FC, useState } from 'react';

import Input from '../Input';
import Button from '../Button';
import styles from './SignupForm.module.css';
import cn from 'classnames';

export interface SignInProps {
  loginClick: (email: string, password: string) => void;
}
const SignUpForm: FC<SignInProps> = ({ loginClick }) => {
  const [name, nameHandler] = useState('');
  const [email, emailHandler] = useState('');
  const [password, passwordHandler] = useState('');
  const [confirmPassword, confirmPasswordHandler] = useState('');
  return (
    <div className={cn(styles.signUp_wrapper)}>
      <h1>Sign Up</h1>
      <div className={styles.signUp_container}>
        <div>Name</div>
        <Input
          className={cn(styles.sigUp_name)}
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(event: any) => nameHandler(event.target.value)}
        />
        <div>Email</div>
        <Input
          className={cn(styles.sigUp_email)}
          type="text"
          placeholder="Your email"
          value={email}
          onChange={(event: any) => emailHandler(event.target.value)}
        />
        <div>Password</div>
        <Input
          className={cn(styles.sigUp_password)}
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(event: any) => passwordHandler(event.target.value)}
        />
        <div>Confirm password</div>
        <Input
          className={cn(styles.sigUp_confirm_password)}
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(event: any) => confirmPasswordHandler(event.target.value)}
        />
        <Button
          className={styles.register_button}
          title="sign in"
          onClick={() => loginClick(email, password)}></Button>
      </div>
    </div>
  );
};
export default SignUpForm;
