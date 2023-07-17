'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <div
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <span className={isMenuOpen ? styles.white : ''}></span>
        <span className={isMenuOpen ? styles.white : ''}></span>
        <span className={isMenuOpen ? styles.white : ''}></span>
      </div>
      <div
        className={`${styles.menuOverlay} ${isMenuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      />
      <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <li>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/music" onClick={closeMenu}>
            Music
          </Link>
        </li>
        <li>
          <Link href="/store" onClick={closeMenu}>
            Store
          </Link>
        </li>
        <li>
          <Link href="/tour" onClick={closeMenu}>
            Tour
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
