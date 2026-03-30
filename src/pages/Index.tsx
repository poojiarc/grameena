import HeroSection from '@/components/HeroSection';
import RevealSection from '@/components/RevealSection';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, Heart, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="pt-16">
      <HeroSection />

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">About Us</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Rooted in <span className="text-primary">Tradition</span>, Crafted with <span className="text-accent">Care</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At Grameena Arogya, we are committed to bringing back the purity of traditional Indian oil making through our authentic Ganuga (wood-pressed) extraction methods. Our oils are carefully produced using natural processes that preserve essential nutrients, aroma, and taste.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Why Choose Us</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
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
                <div className="text-center p-8 rounded-xl bg-background border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gradient-earth text-cream">
        <div className="container mx-auto text-center">
          <RevealSection>
            <p className="text-gold-light text-sm font-semibold tracking-widest uppercase mb-2">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">What We Offer</h2>
            <p className="text-cream/80 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              Manufacturing & retailing cold-pressed oils and natural health products — from pure Ganuga oils to organic flours, ghee, and spices.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-gold text-earth px-8 py-3 rounded-lg font-semibold hover:bg-gold-light transition-all duration-200 active:scale-95"
            >
              Browse Products <ArrowRight size={16} />
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <RevealSection>
            <div className="text-center mb-10">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">Get In Touch</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Contact Us</h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Phone, label: 'Phone', value: '99642 14264', href: 'tel:9964214264' },
              { icon: Mail, label: 'Email', value: 'grameenaarogya@gmail.com', href: 'mailto:grameenaarogya@gmail.com' },
              { icon: MapPin, label: 'Address', value: 'Shivam Rd, Amberpet, Hyderabad', href: undefined },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <RevealSection key={i}>
                <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-foreground font-medium hover:text-primary transition-colors text-sm">{value}</a>
                  ) : (
                    <p className="text-foreground font-medium text-sm">{value}</p>
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
