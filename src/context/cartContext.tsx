import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  deleteItem: (id: string) => void;
  itemCount: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (newItem: CartItem) => {
    if (!newItem.id || !newItem.name || !newItem.price) {
      console.error('Malformed item: ', newItem);
      return;
    }
    setCart((prevItems: CartItem[]) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);
      let updatedItems;
      if (existingItem) {
        updatedItems = prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...prevItems, { ...newItem, quantity: 1 }];
      }
      return updatedItems;
    });
  };

  const removeItem = (itemId: string) => {
    setCart((prevItems: CartItem[]) => {
      return prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const deleteItem = (itemId: string) => {
    setCart((prevItems) => {
      return prevItems.filter((item) => item.id !== itemId);
    });
  };

  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, deleteItem, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
