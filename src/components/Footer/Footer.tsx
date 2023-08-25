'use client';

import { useState } from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      </div>
    </footer>
  );
};

export default Footer;
