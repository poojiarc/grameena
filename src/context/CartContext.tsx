import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedQuantity: string;
  price: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, selectedQuantity: string, price: number) => void;
  removeItem: (productId: string, selectedQuantity: string) => void;
  updateQuantity: (productId: string, selectedQuantity: string, delta: number) => void;
  getItemCount: (productId: string, selectedQuantity: string) => number;
  totalPrice: number;
  totalItems: number;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const getKey = (productId: string, selectedQuantity: string) => `${productId}-${selectedQuantity}`;

  const addItem = (product: Product, selectedQuantity: string, price: number) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id && i.selectedQuantity === selectedQuantity);
      if (existing) {
        return prev.map(i => i.product.id === product.id && i.selectedQuantity === selectedQuantity ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { product, quantity: 1, selectedQuantity, price }];
    });
  };

  const removeItem = (productId: string, selectedQuantity: string) => {
    setItems(prev => prev.filter(i => !(i.product.id === productId && i.selectedQuantity === selectedQuantity)));
  };

  const updateQuantity = (productId: string, selectedQuantity: string, delta: number) => {
    setItems(prev => {
      return prev.map(i => {
        if (i.product.id === productId && i.selectedQuantity === selectedQuantity) {
          const newQty = i.quantity + delta;
          if (newQty <= 0) return null;
          return { ...i, quantity: newQty };
        }
        return i;
      }).filter(Boolean) as CartItem[];
    });
  };

  const getItemCount = (productId: string, selectedQuantity: string) => {
    const item = items.find(i => i.product.id === productId && i.selectedQuantity === selectedQuantity);
    return item?.quantity || 0;
  };

  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, getItemCount, totalPrice, totalItems, clearCart, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
