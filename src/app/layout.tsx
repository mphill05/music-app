'use client';

import { SocialMediaLinks } from '@/components/SocialLinks/SocialLinks';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { Cart } from '@/components/Cart/cart';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <html lang="en">
      <body>
        <Navbar toggleCart={toggleCart} />
        <SocialMediaLinks />
        <Cart isCartOpen={isCartOpen} toggleCart={toggleCart} cartItems={[]} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
