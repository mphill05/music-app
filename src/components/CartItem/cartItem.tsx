import Image from 'next/image';
import styles from './cartItem.module.scss';

interface ItemProps {
  imageUrl: string;
  title: string;
  quantity: number;
  price: number;
}

interface CartItemProps {
  item: ItemProps;
}

export const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className={styles.cartItem}>
      <Image src={item.imageUrl} alt={item.title} />
      <div className={styles.details}>
        <h4>{item.title}</h4>
        <div className={styles.counter}>
          <button>-</button>
          <span>P{item.quantity}</span>
          <button>+</button>
        </div>
      </div>
      <div className={styles.trash}>
        <button>Delete</button>
      </div>
      <div className={styles.price}>
        <span>${item.price}</span>
      </div>
    </div>
  );
};
