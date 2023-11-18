import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  type?: any;
  value?: any;
  onClick?: any;
}

const Button = ({ children }: ButtonProps) => {
  return <button className={styles.buttonStyles}>{children}</button>;
};

export default Button;
