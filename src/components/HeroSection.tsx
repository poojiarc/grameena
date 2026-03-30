import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '@/assets/hero1.jpg';
import hero2 from '@/assets/hero2.jpg';
import hero3 from '@/assets/hero3.jpg';
import { Link } from 'react-router-dom';

const slides = [hero1, hero2, hero3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Hero ${i + 1}`}
            className="w-full h-full object-cover"
            {...(i === 0 ? { width: 1920, height: 1080 } : { loading: 'lazy' as const, width: 1920, height: 1080 })}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-gold-light text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            Pure & Traditional
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
            Pure Traditional <span className="text-gradient-gold">Ganuga Oils</span> for Healthy Living
          </h1>
          <p className="text-cream/80 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            100% natural, chemical-free cold pressed oils made with authentic wood-pressed methods. Preserving nutrients, aroma & taste the traditional way.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/products"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 active:scale-95"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-cream/40 text-cream px-8 py-3 rounded-lg font-semibold hover:bg-cream/10 transition-all duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button onClick={() => setCurrent(p => (p - 1 + slides.length) % slides.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-cream/20 text-cream hover:bg-cream/30 transition-colors">
        <ChevronLeft size={24} />
      </button>
      <button onClick={() => setCurrent(p => (p + 1) % slides.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-cream/20 text-cream hover:bg-cream/30 transition-colors">
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${current === i ? 'bg-gold w-6' : 'bg-cream/40'}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
