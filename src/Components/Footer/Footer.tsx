import React, { FC } from 'react';

import cn from 'classnames';
import styles from './Footer.module.css';

import { useThemeContext, Theme } from '../../Context/themeModeContext';

import Switch from '../ButtonSwitch/Switch';

const Footer: FC = () => {
  const { theme } = useThemeContext();
  const isThemeLight = theme === Theme.Light;
  return (
    <div className={cn(styles.footer_container)}>
      <div className={cn(styles.footer_text)}>© 2022 Blogologo</div>
      <div className={cn(styles.theme_block)}>
        <div className={cn(styles.theme_text)}>Dark Theme</div>
        <Switch />
      </div>
    </div>
  );
};

export default Footer;
