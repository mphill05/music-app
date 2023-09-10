'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import CartIcon from '../CartIcon/CartIcon';
import { Dropdown } from '../Dropdown/Dropdown';

interface NavbarProps {
  toggleCart: () => void;
}

const Navbar = ({ toggleCart }: NavbarProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logo}>Logo</div>
      </Link>
      <div className={styles.menuWrapper}>
        <ul className={styles.menu}>
          <li>
            <Dropdown isLoggedIn={isLoggedIn} />
          </li>
          <button className={styles.cartBtn} onClick={toggleCart}>
            <CartIcon itemCount={5} />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
