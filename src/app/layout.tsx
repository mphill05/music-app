'use client';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { SocialMediaLinks } from '@/components/SocialLinks/SocialLinks';
import { Cart } from '@/components/Cart/cart';
import CartProvider, { useCart } from '@/context/cartContext';
import AuthProvider from './AuthProvider';
import Spline from '@splinetool/react-spline';
import dynamic from 'next/dynamic';
import styles from './page.module.scss';

import '../globals.scss';
import Script from 'next/script';

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
  const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
  });

  return (
    <AuthProvider>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@0.9.506/build/spline-viewer.js"
      ></Script>
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
          <Spline
            className={styles.splineBackground}
            scene="https://prod.spline.design/betSAaNkxRq9Rfof/scene.splinecode"
          />
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
