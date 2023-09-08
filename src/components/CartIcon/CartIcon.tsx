import React from 'react';
import styles from './cartIcon.module.scss';
import Image from 'next/image';

interface CartIconProps {
  itemCount: number;
}

const CartIcon = ({ itemCount }: CartIconProps) => (
  <div className={styles.cartIcon}>
    <Image
      src="/ShoppingBag.svg"
      alt="Cart"
      width={35}
      height={35}
      className={styles.shoppingIcon}
    />
    <span className={styles.itemCount}>{itemCount}</span>
  </div>
);

export default CartIcon;
