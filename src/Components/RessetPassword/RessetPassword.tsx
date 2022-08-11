import { FC, useEffect, useRef, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import { useInputValue } from '../../Utils/useInputValue';
const ResetPassword: FC = () => {
  const [email, emailHandler] = useInputValue();
  const [emailSentShown, setEmailSentShown] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  //   const focusHandler = () => {
  //     inputRef.current.focus();
  //   };
  const resetPasswordHandler = () => {
    setEmailSentShown(email);
    const resetPassData = {
      email,
    };
    console.log('Reset password request was sent, with this data:', resetPassData);
  };

  return (
    <div>
      <h2>resser password</h2>

      {emailSentShown && (
        <div>
          You will receive an email <span className="email">{emailSentShown}</span> with a link to
          reset your password!
        </div>
      )}

      <Input
        ref={inputRef}
        type="text"
        placeholder="Your email"
        value={email}
        onChange={emailHandler}
      />

      <Button title="Reset" onClick={resetPasswordHandler} />
      {/* <Button title="focus" onClick={focusHandler} /> */}
    </div>
  );
};
export default ResetPassword;
