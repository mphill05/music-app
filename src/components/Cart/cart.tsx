import React, { useState } from 'react';
import styles from './cart.module.scss';
import { CartItem } from '../CartItem/cartItem';

interface CartProps {
  isCartOpen: boolean;
  toggleCart: any;
  cartItems: Array<{
    imageUrl: string;
    title: string;
    price: number;
    quantity: number;
  }>;
}

export const Cart = ({ isCartOpen, toggleCart, cartItems }: CartProps) => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5;

  return (
    <>
      <div className={`${styles.cart} ${isCartOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={toggleCart}>
          X
        </button>
        <div className={styles.cartHeader}>
          <span>Cart</span>
          <span>{cartItems.length} items</span>
        </div>
        <div className={styles.cartItems}>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
        <div className={styles.checkoutSection}>
          <div className={styles.totalInfo}>
            <div className={styles.shipping}>
              <span>Shipping</span>
              <span>$10.00</span>
            </div>
            <div className={styles.subtotal}>
              <span>Subtotal</span>
              <span>$100.00</span>
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