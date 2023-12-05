'use client';

import { useState } from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { footerLinks } from '@/constants';
import { motion } from 'framer-motion';

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
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 5 }}
      transition={{ duration: 0.5 }}
      className={styles.footer}
    >
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
          {footerLinks.map((link) => (
            <li
              className={`${isActive(link.route) ? styles.active : ''}`}
              key={link.label}
            >
              <Link href={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.footer>
  );
};

export default Footer;
