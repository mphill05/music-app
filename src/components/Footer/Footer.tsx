'use client';

import { useState } from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const currentRoute = usePathname();

  const isActive = (path: string) => currentRoute === path;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email.trim() === '') {
      setErrorMessage('Please enter your email.');
    } else {
      // Perform submit logic here
      setErrorMessage('Please enter a valid email.');
    }
  };

  const handleButtonClick = () => {
    if (email.trim() === '') {
      setErrorMessage('Please enter your email.');
    } else {
      // Perform submit logic here
      setErrorMessage('Please enter a valid email.');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          {errorMessage && <span className={styles.error}>{errorMessage}</span>}
          <input
            type="email"
            placeholder="Join the mailing list"
            className={`${styles.input} ${errorMessage && styles.inputError}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="button"
            className={styles.button}
            onClick={handleButtonClick}
          >
            Submit
          </button>
        </form>
        <ul className={styles.footerMenu}>
          <li className={`${isActive('/') ? styles.active : ''}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${isActive('/music') ? styles.active : ''}`}>
            <Link href="/music">Music</Link>
          </li>
          <li className={`${isActive('/store') ? styles.active : ''}`}>
            <Link href="/store">Store</Link>
          </li>
          <li className={`${isActive('/contact') ? styles.active : ''}`}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
