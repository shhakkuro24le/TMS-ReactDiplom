import { FC, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import styles from './RessetPassword.module.css';
import Button from '../Button';
import Input from '../Input';
import { useInputValue } from '../../Utils/useInputValue';
import { useLocation, useNavigate } from 'react-router-dom';
const ResetPassword: FC = () => {
  const [email, emailHandler] = useInputValue();
  const [emailSentShown, setEmailSentShown] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const resetPasswordHandler = () => {
    setEmailSentShown(email);
    const resetPassData = {
      email,
    };
    navigate('/', { replace: true, state: location });
  };

  return (
    <div className={cn(styles.resset_wrapper)}>
      <h1>Reset password</h1>
      <div className={cn(styles.resset_container)}>
        <div>Email</div>
        <Input
          className={cn(styles.resset_email)}
          type="text"
          placeholder="Your email"
          value={email}
          onChange={emailHandler}
        />

        <Button title="Reset password" onClick={resetPasswordHandler} />
      </div>
    </div>
  );
};
export default ResetPassword;
