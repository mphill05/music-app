import styles from './CartIcon.module.scss';
import Image from 'next/image';

const CartIcon = ({ itemCount }: { itemCount: number }) => {
  return (
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
};

export default CartIcon;
