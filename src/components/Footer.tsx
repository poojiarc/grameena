import { Link } from 'react-router-dom';
import { Home, Info, ShoppingBag, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-earth text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Grameena Arogya" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <h3 className="font-display text-lg font-bold text-gold-light">Grameena Arogya</h3>
                <p className="text-xs text-cream/70">Cold Pressed Oils</p>
              </div>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed">
              Bringing back the purity of traditional Indian oil making through authentic Ganuga methods.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-cream/10 hover:bg-gold/30 transition-colors"><Facebook size={18} /></a>
              <a href="https://instagram.com/grameenaarogya_ganugaoils" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-cream/10 hover:bg-gold/30 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 rounded-lg bg-cream/10 hover:bg-gold/30 transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold text-gold-light mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[{ to: '/', label: 'Home', icon: Home }, { to: '/about', label: 'About Us', icon: Info }, { to: '/products', label: 'Products', icon: ShoppingBag }, { to: '/contact', label: 'Contact Us', icon: Phone }].map(({ to, label, icon: Icon }) => (
                <Link key={to} to={to} className="flex items-center gap-2 text-sm text-cream/70 hover:text-gold-light transition-colors">
                  <Icon size={14} /> {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-gold-light mb-4">Contact Details</h4>
            <div className="space-y-3">
              <a href="tel:9964214264" className="flex items-start gap-2 text-sm text-cream/70 hover:text-gold-light transition-colors">
                <Phone size={14} className="mt-0.5 shrink-0" /> 99642 14264
              </a>
              <a href="mailto:grameenaarogya@gmail.com" className="flex items-start gap-2 text-sm text-cream/70 hover:text-gold-light transition-colors">
                <Mail size={14} className="mt-0.5 shrink-0" /> grameenaarogya@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-cream/70">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Shivam Rd, beside Karur Vysya Bank, Vidya Nagar, APHB Colony, Amberpet, Hyderabad, Telangana 500044</span>
              </div>
            </div>
          </div>

          {/* Services & Hours */}
          <div>
            <h4 className="font-display text-base font-semibold text-gold-light mb-4">Services</h4>
            <p className="text-sm text-cream/70 mb-4">Manufacturing & retailing cold-pressed oils and natural health products.</p>
            <h4 className="font-display text-base font-semibold text-gold-light mb-2 flex items-center gap-2"><Clock size={14} /> Business Hours</h4>
            <div className="text-sm text-cream/70 space-y-1">
              <p>Mon – Sat: 9:30 AM – 9:30 PM</p>
              <p>Sunday: 9:30 AM – 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 py-4 text-center">
          <div className="flex justify-center items-center gap-1 text-sm text-cream/60">
  Made with 
  <Heart size={14} className="text-destructive fill-destructive" />
  by
  <a
    href="https://staffarc.in"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 text-gold-light hover:underline font-medium"
  >
    <img
      src="https://www.staffarc.in/images/Staffarc-logo.png"
      alt="StaffArc logo"
      className="h-4 w-4 object-contain"
    />
    StaffArc
  </a>
</div>

          <p className="text-xs text-cream/40 mt-1">© {new Date().getFullYear()} Grameena Arogya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
