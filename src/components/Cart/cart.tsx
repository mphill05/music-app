import styles from './cart.module.scss';
import { CartItem } from '../CartItem/cartItem';
import Button from '../Buttons/Button';
import { Icons } from '../Icons/Icons';

interface CartProps {
  isCartOpen: boolean;
  toggleCart: any;
  cartItems: Array<{
    id: string;
    imageUrl: string;
    title: string;
    price: number;
    quantity: number;
  }>;
  addItem: (item: any) => void;
  removeItem: (item: any) => void;
  deleteItem: (item: any) => void;
}

export const Cart = ({
  isCartOpen,
  toggleCart,
  cartItems,
  addItem,
  removeItem,
  deleteItem,
}: CartProps) => {
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const itemCount = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <>
      <div className={`${styles.cart} ${isCartOpen ? styles.open : ''}`}>
        <div className={styles.cartHeader}>
          <div className={styles.cartTextAndCount}>
            <h3>Cart</h3>
            <span className={styles.itemCount}>{itemCount}</span>
          </div>
          <button className={styles.closeButton} onClick={toggleCart}>
            X
          </button>
        </div>
        <div
          className={`${styles.cartItems} ${
            cartItems.length === 0 ? styles.centerContent : ''
          }`}
        >
          {cartItems.length === 0 ? (
            <div className={styles.emptyCartMessage}>
              <Icons.cart className={styles.cartIcon} aria-hidden="true" />
              <div>Your cart is empty</div>
            </div>
          ) : (
            <div className={styles.cartItemStyling}>
              {cartItems.map((item, index) => (
                <CartItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                  removeItem={removeItem}
                  deleteItem={deleteItem}
                />
              ))}
            </div>
          )}
        </div>
        {cartItems.length === 0 ? (
          <></>
        ) : (
          <div className={styles.checkoutSection}>
            <div className={styles.totalInfo}>
              <div className={styles.shipping}>
                <span className={styles.checkoutText}>Shipping</span>
                <span className={styles.shippingText}>
                  Calcuated at Checkout
                </span>
              </div>
              <div className={styles.subtotal}>
                <span className={styles.checkoutText}>Subtotal</span>
                <span className={styles.checkoutTotal}>
                  ${subtotal.toFixed(2)}
                </span>
              </div>
            </div>
            <Button className={styles.checkoutButton}>Checkout</Button>
          </div>
        )}
      </div>
      {isCartOpen && (
        <div className={styles.overlay} onClick={toggleCart}></div>
      )}
    </>
  );
};
