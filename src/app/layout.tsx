'use client';

import { SocialMediaLinks } from '@/components/SocialLinks/SocialLinks';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { Cart } from '@/components/Cart/cart';
import { useState } from 'react';
import '../globals.scss';
import CartProvider, { useCart } from '@/context/cartContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <LayoutContent>{children}</LayoutContent>
    </CartProvider>
  );
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { cart, addItem, removeItem, deleteItem, isCartOpen, toggleCart } =
    useCart();

  return (
    <html lang="en">
      <body>
        <Navbar toggleCart={toggleCart} />
        <SocialMediaLinks />
        <Cart
          isCartOpen={isCartOpen}
          toggleCart={toggleCart}
          cartItems={cart}
          addItem={addItem}
          removeItem={removeItem}
          deleteItem={deleteItem}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
