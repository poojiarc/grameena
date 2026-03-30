import { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }: { product: Product }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { addItem, updateQuantity, getItemCount } = useCart();
  const selected = product.prices[selectedIdx];
  const count = getItemCount(product.id, selected.quantity);

  const categoryEmoji: Record<string, string> = {
    oils: '🫗',
    ghee: '🧈',
    flours: '🌾',
    others: '🍯',
  };

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image placeholder with emoji */}
      <div className="relative h-44 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <span className="text-6xl">{categoryEmoji[product.category]}</span>
        <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 rounded-full capitalize">
          {product.category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="text-sm text-accent font-medium mb-3">{product.teluguName}</p>

        {/* Quantity toggles */}
        {product.prices.length > 1 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {product.prices.map((p, idx) => (
              <button
                key={p.quantity}
                onClick={() => setSelectedIdx(idx)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${
                  idx === selectedIdx
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10'
                }`}
              >
                {p.quantity}
              </button>
            ))}
          </div>
        )}

        {product.prices.length === 1 && (
          <p className="text-xs text-muted-foreground mb-3">{selected.quantity}</p>
        )}

        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold text-primary">₹{selected.price}</span>

          {count === 0 ? (
            <button
              onClick={() => addItem(product, selected.quantity, selected.price)}
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-200 active:scale-95"
            >
              <ShoppingCart size={14} /> Add
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-primary/10 rounded-lg p-1">
              <button
                onClick={() => updateQuantity(product.id, selected.quantity, -1)}
                className="p-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center text-sm font-bold text-primary">{count}</span>
              <button
                onClick={() => updateQuantity(product.id, selected.quantity, 1)}
                className="p-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
