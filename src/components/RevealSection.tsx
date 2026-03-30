import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ReactNode } from 'react';

const RevealSection = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealSection;
