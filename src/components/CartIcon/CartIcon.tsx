import React from 'react';
import styles from './cartIcon.module.scss';
import Image from 'next/image';

interface CartIconProps {
  toggleCartHidden: () => void;
  itemCount: number;
}

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden, itemCount }) => (
  <div className={styles.cartIcon} onClick={toggleCartHidden}>
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
