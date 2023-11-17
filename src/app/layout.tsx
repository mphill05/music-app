'use client';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { SocialMediaLinks } from '@/components/SocialLinks/SocialLinks';
import { Cart } from '@/components/Cart/cart';
import CartProvider, { useCart } from '@/context/cartContext';
import AuthProvider from './AuthProvider';

import '../globals.scss';

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
    <AuthProvider>
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
    </AuthProvider>
  );
}
