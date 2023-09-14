import Image from 'next/image';
import styles from './cartItem.module.scss';

interface CartItemProps {
  item: {
    id: string;
    imageUrl: string;
    title: string;
    price: number;
    quantity: number;
  };
  addItem: (item: any) => void;
  removeItem: (item: any) => void;
  deleteItem: (item: any) => void;
}

export const CartItem = ({
  item,
  addItem,
  removeItem,
  deleteItem,
}: CartItemProps) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <Image src={item.imageUrl} alt={item.title} width={50} height={50} />
      </div>
      <div className={styles.details}>
        <h4>{item.title}</h4>
        <div className={styles.actions}>
          <div className={styles.counter}>
            <button
              className={styles.removeBtn}
              onClick={() => removeItem(item.id)}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button className={styles.addBtn} onClick={() => addItem(item)}>
              +
            </button>
          </div>
          <p className={styles.price}>{item?.price?.toFixed(2)}</p>
        </div>
      </div>
      <div className={styles.trash}>
        <button onClick={() => deleteItem(item.id)}>🗑</button>
      </div>
    </div>
  );
};
