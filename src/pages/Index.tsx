import HeroSection from '@/components/HeroSection';
import RevealSection from '@/components/RevealSection';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, Heart, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import aboutImg from '@/assets/about-story.jpg';

const featuredProducts = products.slice(0, 4);

const Index = () => {
  return (
    <div className="pt-16">
      <HeroSection />

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <RevealSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative">
                <img
                  src={aboutImg}
                  alt="Traditional Ganuga oil making process"
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10 hidden lg:block" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-xl -z-10 hidden lg:block" />
              </div>
              <div>
                <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">About Us</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Rooted in <span className="text-primary">Tradition</span>, Crafted with <span className="text-accent">Care</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-base lg:text-lg">
                  At Grameena Arogya, we are committed to bringing back the purity of traditional Indian oil making through our authentic Ganuga (wood-pressed) extraction methods. Our oils are carefully produced using natural processes that preserve essential nutrients, aroma, and taste.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 active:scale-95 shadow-md"
                >
                  Learn More About Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our Products</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Handpicked <span className="text-primary">Essentials</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                From cold-pressed oils to pure ghee and natural flours — explore our curated collection.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <RevealSection key={product.id}>
                <ProductCard product={product} />
              </RevealSection>
            ))}
          </div>

          <RevealSection>
            <div className="text-center mt-12">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl text-base"
              >
                View All Products <ArrowRight size={18} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Why Choose Us</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Pure by <span className="text-primary">Nature</span>
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: 'Natural Process', desc: 'Wood-pressed extraction preserving all natural nutrients and authentic flavors.' },
              { icon: Droplets, title: 'Chemical Free', desc: 'No chemicals, no preservatives, no artificial processing. 100% pure oils.' },
              { icon: Heart, title: 'Health First', desc: 'Rich in essential fatty acids, vitamins, and antioxidants for your wellbeing.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <RevealSection key={i}>
                <div className="text-center p-10 rounded-2xl bg-card border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-18 h-18 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center w-[72px] h-[72px]">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-gradient-earth text-cream">
        <div className="container mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-gold-light text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">Contact Us</h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Phone, label: 'Phone', value: '99642 14264', href: 'tel:9964214264' },
              { icon: Mail, label: 'Email', value: 'grameenaarogya@gmail.com', href: 'mailto:grameenaarogya@gmail.com' },
              { icon: MapPin, label: 'Address', value: 'Shivam Rd, Amberpet, Hyderabad', href: undefined },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <RevealSection key={i}>
                <div className="text-center p-8 rounded-2xl bg-cream/5 border border-cream/10 hover:bg-cream/10 transition-all duration-300 backdrop-blur-sm">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gold/20 flex items-center justify-center">
                    <Icon size={24} className="text-gold-light" />
                  </div>
                  <p className="text-sm text-cream/60 mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-cream font-medium hover:text-gold-light transition-colors">{value}</a>
                  ) : (
                    <p className="text-cream font-medium text-sm">{value}</p>
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
