import { useState } from 'react';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import useInputValue from '../../Utils/useInputValue';
import styles from './Registration.module.css';
const Registration = () => {
  const [name, nameHandler] = useInputValue();
  const [email, emailHandler] = useInputValue();
  const [password, passwordHandler] = useInputValue();
  const [confirmPassword, confirmPasswordHandler] = useInputValue();

  const registerHandler = () => {
    const LoginData = {
      name,
      email,
      password,
      confirmPassword,
    };
    console.log('ваши даные', LoginData);
  };
  return (
    <div className={styles.register_container}>
      <Input type="text" placeholder="Your name" value={name} onChange={nameHandler} />
      <Input type="text" placeholder="Your email" value={email} onChange={emailHandler} />
      <Input
        type="password"
        placeholder="Your password"
        value={password}
        onChange={passwordHandler}
      />
      <Input
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={confirmPasswordHandler}
      />
      <Button className={styles.register_button} title="sign in" onClick={registerHandler}></Button>
    </div>
  );
};

export default Registration;
