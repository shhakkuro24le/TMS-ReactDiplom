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
};

const Input: FC<inputProps> = React.memo(
  React.forwardRef((props) => {
    const { type, disabled, value, placeholder, onChange, className } = props;

    return (
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(styles.input, className)}
      />
    );
  }),
);
export default Input;
