import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { TrustSection } from '../components/TrustSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';

interface HomeProps {
  onOpenConsultation?: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenConsultation }) => {
  useEffect(() => {
    document.title = 'HERRLICH GROUP | Uncovering Truths. Ensuring Justice.';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero onOpenConsultation={onOpenConsultation} />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
    </>
  );
};
