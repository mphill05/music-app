'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import CartIcon from '../CartIcon/CartIcon';

interface NavbarProps {
  toggleCart: () => void;
}

const Navbar = ({ toggleCart }: NavbarProps) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.menuWrapper}>
        <ul className={styles.menu}>
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
          <button onClick={toggleCart}>
            <CartIcon itemCount={5} />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
