import { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }: { product: Product }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { addItem, updateQuantity, getItemCount } = useCart();
  const selected = product.prices[selectedIdx];
  const count = getItemCount(product.id, selected.quantity);
  const hasDiscount = selected.mrp && selected.mrp > selected.price;
  const discountPercent = hasDiscount ? Math.round(((selected.mrp! - selected.price) / selected.mrp!) * 100) : 0;

  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5">
      {/* Product Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={512}
          height={512}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        {hasDiscount && (
          <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-bold px-2.5 py-1 rounded-full">
            {discountPercent}% OFF
          </div>
        )}
        <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-[10px] font-semibold px-2.5 py-1 rounded-full capitalize tracking-wide">
          {product.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground leading-tight">{product.name}</h3>
        <p className="text-sm text-accent font-medium mt-0.5 mb-4">{product.teluguName}</p>

        {/* Quantity toggles */}
        {product.prices.length > 1 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.prices.map((p, idx) => (
              <button
                key={p.quantity}
                onClick={() => setSelectedIdx(idx)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 ${
                  idx === selectedIdx
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10'
                }`}
              >
                {p.quantity}
              </button>
            ))}
          </div>
        )}

        {product.prices.length === 1 && (
          <p className="text-xs text-muted-foreground mb-4 font-medium">{selected.quantity}</p>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold text-primary">₹{selected.price}</span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">₹{selected.mrp}</span>
            )}
          </div>

          {count === 0 ? (
            <button
              onClick={() => addItem(product, selected.quantity, selected.price)}
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all duration-200 active:scale-95 shadow-md hover:shadow-lg"
            >
              <ShoppingCart size={14} /> Add
            </button>
          ) : (
            <div className="flex items-center gap-2.5 bg-primary/10 rounded-xl px-1.5 py-1">
              <button
                onClick={() => updateQuantity(product.id, selected.quantity, -1)}
                className="p-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center text-sm font-bold text-primary">{count}</span>
              <button
                onClick={() => updateQuantity(product.id, selected.quantity, 1)}
                className="p-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
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
