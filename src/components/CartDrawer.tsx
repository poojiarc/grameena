import { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, updateQuantity, removeItem, totalPrice, totalItems, isOpen, setIsOpen, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleCheckout = () => {
    if (!name || !phone || !address) return;

    let message = `🛒 *New Order - Grameena Arogya*\n\n`;
    message += `👤 *Customer:* ${name}\n📱 *Phone:* ${phone}\n📍 *Address:* ${address}\n\n`;
    message += `📦 *Order Details:*\n`;
    items.forEach((item, i) => {
      message += `${i + 1}. ${item.product.name} (${item.selectedQuantity}) × ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    message += `\n💰 *Total: ₹${totalPrice}*`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919964214264?text=${encoded}`, '_blank');
    clearCart();
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/40 z-50" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col" style={{ animation: 'slideIn 0.3s ease-out' }}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-primary" />
            <h2 className="font-display text-lg font-bold">Your Cart ({totalItems})</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <ShoppingBag size={48} className="mb-3 opacity-30" />
              <p className="font-medium">Your cart is empty</p>
              <p className="text-sm">Add some products to get started</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map(item => (
                <div key={`${item.product.id}-${item.selectedQuantity}`} className="bg-card rounded-lg p-3 border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-sm">{item.product.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.selectedQuantity} • ₹{item.price} each</p>
                    </div>
                    <button onClick={() => removeItem(item.product.id, item.selectedQuantity)} className="text-destructive hover:bg-destructive/10 p-1 rounded transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                      <button onClick={() => updateQuantity(item.product.id, item.selectedQuantity, -1)} className="p-1 rounded bg-primary text-primary-foreground"><Minus size={12} /></button>
                      <span className="w-5 text-center text-sm font-bold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.selectedQuantity, 1)} className="p-1 rounded bg-primary text-primary-foreground"><Plus size={12} /></button>
                    </div>
                    <span className="font-display font-bold text-primary">₹{item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Customer Form */}
          {items.length > 0 && (
            <div className="mt-6 space-y-3">
              <h3 className="font-display text-sm font-semibold text-foreground">Delivery Details</h3>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your Name *"
                className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Phone Number *"
                className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <textarea
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Delivery Address *"
                rows={2}
                className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border bg-card">
            <div className="flex justify-between items-center mb-3">
              <span className="font-medium text-muted-foreground">Total Amount</span>
              <span className="font-display text-2xl font-bold text-primary">₹{totalPrice}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={!name || !phone || !address}
              className="w-full flex items-center justify-center gap-2 bg-leaf text-primary-foreground py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-leaf/90 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              <MessageCircle size={18} />
              Order via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
