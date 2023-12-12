import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  href?: any;
  type?: any;
  value?: any;
  download?: any;
  onClick?: any;
  className?: any;
}

const Button = ({ children }: ButtonProps) => {
  return <button className={styles.buttonStyles}>{children}</button>;
};

export default Button;
