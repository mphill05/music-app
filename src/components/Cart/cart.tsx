import React, { useState } from 'react';
import styles from './cart.module.scss';
import { CartItem } from '../CartItem/cartItem';

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
        <button className={styles.closeButton} onClick={toggleCart}>
          X
        </button>
        <div className={styles.cartHeader}>
          <h3>Cart</h3>
          <span className={styles.itemCount}>{itemCount}</span>
        </div>
        <div className={styles.cartItems}>
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
        <div className={styles.checkoutSection}>
          <div className={styles.totalInfo}>
            <div className={styles.shipping}>
              <span className={styles.checkoutText}>Shipping</span>
              <span className={styles.shippingText}>Calcuated at Checkout</span>
            </div>
            <div className={styles.subtotal}>
              <span className={styles.checkoutText}>Subtotal</span>
              <span className={styles.checkoutTotal}>
                ${subtotal.toFixed(2)}
              </span>
            </div>
          </div>
          <button className={styles.checkoutButton}>Checkout</button>
        </div>
      </div>
      {isCartOpen && (
        <div className={styles.overlay} onClick={toggleCart}></div>
      )}
    </>
  );
};
