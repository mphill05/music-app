'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import CartIcon from '../CartIcon/CartIcon';
import { Dropdown } from '../Dropdown/Dropdown';
import { useCart } from '@/context/cartContext';

interface NavbarProps {
  toggleCart: () => void;
}

const Navbar: React.FC<NavbarProps> = React.memo(({ toggleCart }) => {
  const { itemCount } = useCart();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logo}>Logo</div>
      </Link>
      <div className={styles.menuWrapper}>
        <ul className={styles.menu}>
          <Dropdown />
          <CartButton toggleCart={toggleCart} itemCount={itemCount} />
        </ul>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
const CartButton = ({
  toggleCart,
  itemCount,
}: {
  toggleCart: () => void;
  itemCount: number;
}) => {
  return (
    <button className={styles.cartBtn} onClick={toggleCart}>
      <CartIcon itemCount={itemCount} />
    </button>
  );
};
