'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import CartIcon from '../CartIcon/CartIcon';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.menuWrapper}>
        <ul className={styles.menu}>
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
          <li>
            <CartIcon
              toggleCartHidden={() => {
                console.log('Toggle cart');
              }}
              itemCount={5}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
