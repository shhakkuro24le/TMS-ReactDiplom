import React, { ChangeEvent, FC, ForwardedRef } from 'react';
import styles from './input.module.css';
type inputProps = {
  ref?: ForwardedRef<HTMLInputElement>;
  type: string;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input: FC<inputProps> = React.memo(
  React.forwardRef((props, ref) => {
    const { type, disabled, value, placeholder, onChange } = props;

    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }),
);
export default Input;
