import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, ShoppingBag, Phone, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import logo from '@/assets/logo.jpeg';

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About Us', icon: Info },
  { to: '/products', label: 'Products', icon: ShoppingBag },
  { to: '/contact', label: 'Contact Us', icon: Phone },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Grameena Arogya" className="h-10 w-10 rounded-full object-cover" />
          <div className="hidden sm:block">
            <span className="font-display text-lg font-bold text-primary">Grameena Arogya</span>
            <span className="block text-xs text-muted-foreground -mt-1">Cold Pressed Oils</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary ${pathname === to ? 'bg-primary/10 text-primary' : 'text-foreground/70'}`}
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={22} className="text-primary" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-md animate-fade-in">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors border-b border-border/50 ${pathname === to ? 'text-primary bg-primary/5' : 'text-foreground/70 hover:bg-primary/5'}`}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
