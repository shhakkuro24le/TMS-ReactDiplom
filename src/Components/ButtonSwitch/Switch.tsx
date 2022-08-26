import React, { useState } from 'react';

import styles from './Switch.module.css';

import { Theme, useThemeContext } from '../../Context/themeModeContext';

const Switch = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();

  const onClickTheme = () => {
    onChangeTheme(theme === 'light' ? Theme.Dark : Theme.Light);
  };

  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  console.log(isToggled);
  return (
    <label className={styles.toggleSwitch}>
      <input
        onClick={() => onClickTheme()}
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
      />
      <span className={styles.switch}></span>
    </label>
  );
};

export default Switch;
