import { useState } from 'react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import RevealSection from '@/components/RevealSection';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-earth text-cream section-padding pb-8">
        <div className="container mx-auto text-center">
          <RevealSection>
            <p className="text-gold-light text-sm font-semibold tracking-widest uppercase mb-2">Our Products</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Pure & Natural Products</h1>
            <p className="text-cream/80 max-w-xl mx-auto">
              Explore our range of cold-pressed oils, pure ghee, natural flours, and more.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border py-3">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-background pt-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(product => (
              <RevealSection key={product.id}>
                <ProductCard product={product} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
