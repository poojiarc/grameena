import RevealSection from '@/components/RevealSection';
import { Leaf, Droplets, Users, TreePine } from 'lucide-react';
import aboutImg from '@/assets/about-story.jpg';

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
            <p className="text-gold-light text-sm font-semibold tracking-widest uppercase mb-3">Our Story</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Grameena Arogya</h1>
            <p className="text-cream/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Bringing back the purity of traditional Indian oil making through authentic Ganuga methods.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Story with Image */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <RevealSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
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
              <div className="space-y-4">
                <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our Heritage</p>
                <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
  Rooted in Tradition, <span className="text-primary">Driven by Purity</span>
</h2>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-4">
                  <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Our Story Since 2019</p>
  At Grameena Arogya, established in 2019, we are dedicated to reviving the purity of traditional Indian oil-making through authentic Ganuga (wood-pressed) extraction methods. Our oils are carefully produced using natural processes that preserve essential nutrients, rich aroma, and original taste—without the use of chemicals or modern refining techniques.
</p>

<p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-4">
  Every product is sourced from high-quality seeds and crafted in small batches to ensure freshness, purity, and superior quality. We follow time-honored methods that respect nature while delivering the goodness of truly natural oils.
</p>

<p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
  Our mission goes beyond just products—we aim to promote healthy living, sustainability, and rural empowerment. By supporting local farmers and preserving traditional practices, we bring you oils that are rooted in trust, tradition, and wellness.
</p>

              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">What Sets Us Apart</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Our Values</h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <RevealSection key={i}>
                <div className="flex gap-5 p-8 rounded-2xl bg-background border border-border hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
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
