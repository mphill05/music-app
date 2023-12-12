'use client';

import Link from 'next/link';
import styles from './Navbar.module.scss';
import CartIcon from '../CartIcon/CartIcon';
import { Dropdown } from '../Dropdown/Dropdown';
import { useCart } from '@/context/cartContext';
import { motion } from 'framer-motion';
import { memo } from 'react';

interface NavbarProps {
  toggleCart: () => void;
}

const Navbar = memo(({ toggleCart }: NavbarProps) => {
  const { itemCount } = useCart();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 5 }}
      transition={{ duration: 0.5 }}
      className={styles.navbar}
    >
      <Link href="/" className={styles.logo}>
        <div className={styles.logo}>Logo</div>
      </Link>
      <div className={styles.menuWrapper}>
        <ul className={styles.menu}>
          <Dropdown />
          <CartButton toggleCart={toggleCart} itemCount={itemCount} />
        </ul>
      </div>
    </motion.nav>
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
