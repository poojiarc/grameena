import RevealSection from '@/components/RevealSection';
import { Leaf, Droplets, Users, TreePine } from 'lucide-react';

const highlights = [
  { icon: Leaf, title: 'Natural Process', desc: 'Our Ganuga (wood-pressed) method retains all natural nutrients, aroma, and taste without chemicals or modern refining.' },
  { icon: Droplets, title: 'Small Batch Production', desc: 'Every batch is crafted with care, ensuring highest quality and freshness in every drop of oil.' },
  { icon: TreePine, title: 'Sustainability', desc: 'We use eco-friendly processes and sustainable sourcing to protect our environment for future generations.' },
  { icon: Users, title: 'Rural Empowerment', desc: 'Supporting local farmers and communities through fair trade and traditional livelihood preservation.' },
];

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-earth text-cream section-padding">
        <div className="container mx-auto text-center">
          <RevealSection>
            <p className="text-gold-light text-sm font-semibold tracking-widest uppercase mb-2">Our Story</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">About Grameena Arogya</h1>
            <p className="text-cream/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Bringing back the purity of traditional Indian oil making through authentic Ganuga methods.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <RevealSection>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                At Grameena Arogya, we are committed to bringing back the purity of traditional Indian oil making through our authentic Ganuga (wood-pressed) extraction methods. Our oils are carefully produced using natural processes that preserve essential nutrients, aroma, and taste without the use of chemicals or modern refining techniques.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
                Sourced from high-quality seeds and crafted in small batches, our products reflect our dedication to health, sustainability, and rural empowerment. We believe that true wellness begins with what we consume, and through our range of pure, natural oils, we aim to promote a healthier lifestyle rooted in tradition and trust.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">What Sets Us Apart</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <RevealSection key={i}>
                <div className="flex gap-4 p-6 rounded-xl bg-background border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
