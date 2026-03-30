import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import RevealSection from '@/components/RevealSection';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;
    const text = `Hi, I'm ${name}.\nPhone: ${phone}\n\n${message}`;
    window.open(`https://wa.me/919964214264?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-earth text-cream section-padding">
        <div className="container mx-auto text-center">
          <RevealSection>
            <p className="text-gold-light text-sm font-semibold tracking-widest uppercase mb-2">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-cream/80 max-w-xl mx-auto">
              We'd love to hear from you. Reach out for orders, inquiries, or just to say hello!
            </p>
          </RevealSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <RevealSection>
              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <input
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Phone Number *"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Your Message *"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-leaf text-primary-foreground py-3 rounded-lg font-semibold hover:bg-leaf/90 transition-all duration-200 active:scale-[0.98]"
                  >
                    <MessageCircle size={18} />
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </RevealSection>

            {/* Info + Map */}
            <RevealSection>
              <div className="space-y-6">
                <div className="bg-card rounded-xl border border-border p-6 space-y-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">Contact Information</h3>
                  <a href="tel:9964214264" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Phone size={16} className="text-primary" /></div>
                    <span className="text-sm">99642 14264</span>
                  </a>
                  <a href="mailto:grameenaarogya@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Mail size={16} className="text-primary" /></div>
                    <span className="text-sm">grameenaarogya@gmail.com</span>
                  </a>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"><MapPin size={16} className="text-primary" /></div>
                    <span className="text-sm">Shivam Rd, beside Karur Vysya Bank, Vidya Nagar, APHB Colony, Amberpet, Hyderabad, Telangana 500044</span>
                  </div>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Clock size={16} className="text-primary" /></div>
                    <div className="text-sm">
                      <p>Mon – Sat: 9:30 AM – 9:30 PM</p>
                      <p>Sunday: 9:30 AM – 9:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="rounded-xl overflow-hidden border border-border h-64 lg:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.114!2d78.5102!3d17.3920!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c6a35f3e53%3A0xgrameenaarogya!2sShivam%20Rd%2C%20Amberpet%2C%20Hyderabad%2C%20Telangana%20500044!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Grameena Arogya Location"
                  />
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
