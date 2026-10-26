import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Eye } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="section" id="about" aria-labelledby="about-section-heading">
      <div className="container">
        <div className="editorial-split">
          {/* Editorial Visual */}
          <div style={{ position: 'relative' }}>
            <div className="about-img-frame">
              <img
                src="/IMG_8565.jpg"
                alt="Herrlich Group meeting and conference facility"
                loading="lazy"
              />
            </div>
          </div>

          {/* Editorial Copy */}
          <div>
            <div className="eyebrow">
              <Eye size={14} color="#0071E3" />
              <span>WHO WE ARE</span>
            </div>

            <h2 id="about-section-heading" className="section-title">
              Strategic Intelligence Grounded in Unshakable Truth.
            </h2>

            <p style={{ fontSize: '16.5px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Herrlich Group operates at the intersection of investigative field intelligence, forensic financial analysis, and board-level risk management.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
              We assist general counsels, special audit committees, institutional investors, and leadership teams in uncovering factual clarity during critical situations—from multi-million-dollar contractual disputes to sensitive internal whistleblower revelations.
            </p>

            {/* Core Capability Checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#1D1D1F' }}>Legally Defensible Methodologies: </strong>
                  <span style={{ fontSize: '14px', color: '#6E6E73' }}>All data collection strictly observes ethical, privacy, and evidentiary standards.</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#1D1D1F' }}>Senior Partner Oversight: </strong>
                  <span style={{ fontSize: '14px', color: '#6E6E73' }}>Every engagement is directed personally by seasoned investigative leaders.</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#1D1D1F' }}>Absolute Operational Discretion: </strong>
                  <span style={{ fontSize: '14px', color: '#6E6E73' }}>Secure encrypted environments protect client identity and work product.</span>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-secondary">
              <span>Read About Our Practice & Leadership</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
