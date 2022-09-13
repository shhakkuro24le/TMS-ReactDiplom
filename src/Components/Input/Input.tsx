import React, { ChangeEvent, FC } from 'react';
import styles from './input.module.css';
import cn from 'classnames';
type inputProps = {
  type: string;
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<inputProps> = ({
  type,
  disabled,
  value,
  placeholder,
  onChange,
  className,
  onBlur,
}) => {
  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={cn(styles.input, className)}
    />
  );
};
export default Input;
