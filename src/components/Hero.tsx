import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, Lock, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="section hero-wrapper" aria-label="Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Editorial Typography */}
          <div>
            <div className="eyebrow-badge">
              <Sparkles size={13} color="#0071E3" />
              <span>TRUST. INTELLIGENCE. STRATEGY.</span>
            </div>

            <h1 className="hero-headline">
              Clarity for Decisions That Matter.
            </h1>

            <p className="hero-subhead">
              Discover a smarter approach to complex business challenges through informed insights, professional expertise, and solutions designed around your objectives.
            </p>

            <div className="hero-actions">
              <Link to="/services" className="btn-primary">
                <span>Explore Our Services</span>
                <ArrowRight size={15} />
              </Link>

              <button
                type="button"
                className="btn-secondary"
                onClick={onOpenConsultation}
              >
                <span>Talk to Our Team</span>
                <ArrowUpRight size={15} />
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="hero-trust-indicators">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                <div style={{ color: '#0071E3' }}>
                  <Lock size={15} />
                </div>
                <span>Strict Non-Disclosure Guarantee</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                <div style={{ color: '#0071E3' }}>
                  <ShieldCheck size={15} />
                </div>
                <span>Evidentiary-Grade Forensics</span>
              </div>
            </div>
          </div>

          {/* Right Column: Apple-inspired Liquid Glass Visual Monolith */}
          <div style={{ position: 'relative' }}>
            <div className="hero-visual-card">
              <img
                src="/cinematic_forensic_investigation_lab.png"
                alt="Herrlich Group forensic investigation laboratory and operational intelligence center"
                className="hero-visual-image"
                width="640"
                height="480"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
