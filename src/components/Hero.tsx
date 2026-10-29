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
              <span>INTEGRITY. PREVENTION. CORPORATE ACCOUNTABILITY.</span>
            </div>

            <h1 className="hero-headline">
              Clarity for Decisions That Matter.
            </h1>

            <p className="hero-subhead">
              Herrlich Group combines proactive preventive governance and evidentiary detective forensics to uncover facts, safeguard corporate assets, and protect enterprise integrity.
            </p>

            <div className="hero-actions">
              <Link to="/preventive-forensics" className="btn-primary">
                <span>Preventive Forensics</span>
                <ArrowRight size={15} />
              </Link>

              <Link to="/detective-forensics" className="btn-secondary">
                <span>Detective Forensics</span>
                <ArrowUpRight size={15} />
              </Link>

              {onOpenConsultation && (
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#0071E3',
                    fontSize: '13.5px',
                    fontWeight: 650,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 4px'
                  }}
                >
                  <span>Request Consultation →</span>
                </button>
              )}
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
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
