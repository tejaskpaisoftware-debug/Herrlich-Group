import React, { useEffect } from 'react';
import { Lock, CheckCircle2, Globe2, ArrowRight, ArrowUpRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AboutProps {
  onOpenConsultation?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  useEffect(() => {
    document.title = 'About Us | HERRLICH GROUP';
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      title: 'Evidentiary Rigor',
      desc: 'We operate on substantiated facts. Speculation and unverified hearsay have no place in our work product. Every factual assertion is traced to corroborating documentary, digital, or primary-source verification.',
    },
    {
      title: 'Institutional Discretion',
      desc: 'Our investigations frequently touch high-stakes executive reputations, boardroom disputes, and multi-jurisdictional acquisitions. We operate within impenetrable boundaries of professional secrecy.',
    },
    {
      title: 'Uncompromised Independence',
      desc: 'We maintain complete editorial and operational independence in our inquiry findings. We do not modify factual conclusions to suit organizational convenience.',
    },
    {
      title: 'Statutory Defensibility',
      desc: 'All inquiries strictly adhere to applicable data privacy frameworks, telecommunications laws, and corporate compliance standards to ensure evidentiary integrity in arbitral and judicial settings.',
    },
  ];

  return (
    <div className="section" style={{ paddingTop: '28px' }}>
      <div className="container">
        {/* Two-Column Editorial Profile */}
        <div className="editorial-split" style={{ marginBottom: '80px' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 750, color: '#1D1D1F', marginBottom: '20px', letterSpacing: '-0.025em', lineHeight: 1.16 }}>
              Bridging Field Investigation and Boardroom Advisory
            </h1>
            <p style={{ fontSize: '16px', color: '#6E6E73', lineHeight: 1.65, marginBottom: '20px' }}>
              Modern corporate disputes and integrity risks rarely exist in isolation. A procurement fraud scheme often involves off-the-books entities, electronic record destruction, and cross-border kickbacks. Traditional auditing verifies invoices; investigative forensics traces money, relationships, and digital footprints.
            </p>
            <p style={{ fontSize: '15.5px', color: '#6E6E73', lineHeight: 1.65, marginBottom: '28px' }}>
              We bring together career forensic accountants, intelligence analysts, digital evidence practitioners, and corporate governance specialists to assemble an unassailable factual narrative.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={onOpenConsultation}
              >
                <span>Request Partner Discussion</span>
                <ArrowUpRight size={14} />
              </button>
              <Link to="/services" className="btn-secondary">
                <span>Explore Capabilities</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div 
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 44px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                background: '#FFFFFF'
              }}
            >
              <img
                src="/IMG_8562.jpg"
                alt="Herrlich Group Journey and Services Wall"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Operating Pillars */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              Our Operating Standards
            </h2>
            <p className="section-subtitle">
              The ethical and operational commitments that govern every engagement we undertake.
            </p>
          </div>

          <div className="grid-2">
            {coreValues.map((v) => (
              <div 
                key={v.title}
                className="solid-card"
                style={{ padding: '36px 32px', background: '#FFFFFF' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <CheckCircle2 size={20} color="#0071E3" />
                  <h3 style={{ fontSize: '20px', fontWeight: 650, color: '#1D1D1F' }}>
                    {v.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14.5px', color: '#6E6E73', lineHeight: 1.6 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Group Architecture & Practice Entities */}
        <div className="editorial-split" style={{ marginBottom: '80px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div 
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 44px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                background: '#FFFFFF'
              }}
            >
              <img
                src="/IMG_8563.jpg"
                alt="Herrlich Group Corporate Practice Entities and Associates Wall"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <div className="eyebrow">
              <Building2 size={14} color="#0071E3" />
              <span>GROUP ECOSYSTEM</span>
            </div>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#1D1D1F', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              A Unified Ecosystem of Specialized Practices
            </h2>
            <p style={{ fontSize: '15.5px', color: '#6E6E73', lineHeight: 1.65, marginBottom: '20px' }}>
              Our operations combine the specialized capabilities of Herrlich Consulting, Sarang Pandya & Associates, and Secures Dot under one integrated standard of investigative rigor and corporate governance.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#1D1D1F' }}>Herrlich Consulting: </strong>
                  <span style={{ fontSize: '14px', color: '#6E6E73' }}>Strategic fraud mitigation, forensic audit, and enterprise risk advisory.</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#1D1D1F' }}>Sarang Pandya & Associates: </strong>
                  <span style={{ fontSize: '14px', color: '#6E6E73' }}>Evidentiary review, legal counsel support, and statutory compliance.</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#1D1D1F' }}>Secures Dot: </strong>
                  <span style={{ fontSize: '14px', color: '#6E6E73' }}>Field intelligence gathering, counter-surveillance, and digital integrity checks.</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn-secondary"
              onClick={onOpenConsultation}
            >
              <span>Engage Our Advisory Group</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Operational Infrastructure & Confidential Facilities Showcase */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <div className="eyebrow">
              <Building2 size={14} color="#0071E3" />
              <span>HEADQUARTERS & INFRASTRUCTURE</span>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              Purpose-Built for Confidentiality & Analytical Depth
            </h2>
            <p className="section-subtitle">
              Engineered with biometric access controls, isolated consultation suites, and dedicated workstations for institutional corporate advisory.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '32px' }}>
            {/* Facility Card 1 - IMG_8556 */}
            <div 
              className="solid-card"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#FFFFFF',
                boxShadow: '0 16px 44px rgba(0, 0, 0, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.9)'
              }}
            >
              <div className="facility-img-frame">
                <img
                  src="/IMG_8556.jpg"
                  alt="Herrlich Group Advanced Forensic Analysis Workstations"
                  style={{ objectPosition: 'center 40%' }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: '28px 24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1D1D1F', marginBottom: '8px' }}>
                  Advanced Analytical Workspaces
                </h3>
                <p style={{ fontSize: '14.5px', color: '#6E6E73', lineHeight: 1.6, margin: 0 }}>
                  High-security digital workstations equipped for forensic document examination, complex financial modeling, and open-source intelligence synthesis.
                </p>
              </div>
            </div>

            {/* Facility Card 2 - IMG_8558 */}
            <div 
              className="solid-card"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#FFFFFF',
                boxShadow: '0 16px 44px rgba(0, 0, 0, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.9)'
              }}
            >
              <div className="facility-img-frame">
                <img
                  src="/IMG_8558.jpg"
                  alt="Herrlich Group Privileged Consultation and Intake Suites"
                  style={{ objectPosition: 'center 35%' }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: '28px 24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1D1D1F', marginBottom: '8px' }}>
                  Privileged Consultation Cabins
                </h3>
                <p style={{ fontSize: '14.5px', color: '#6E6E73', lineHeight: 1.6, margin: 0 }}>
                  Acoustically insulated private briefing suites and dedicated intake desks structured for strict non-disclosure and sensitive executive consultations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Geographic Coordination & Confidentiality Assurance */}
        <div 
          className="glass-card editorial-split-wide" 
          style={{ 
            padding: '44px 36px', 
            background: 'rgba(255, 255, 255, 0.85)',
            alignItems: 'center'
          }}
        >
          <div>
            <div className="eyebrow">
              <Globe2 size={14} color="#0071E3" />
              <span>PRESENCE & REACH</span>
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              Pan-Regional Field Capabilities
            </h3>
            <p style={{ fontSize: '15px', color: '#6E6E73', lineHeight: 1.6, marginBottom: '16px' }}>
              From operational hubs in New Delhi, Mumbai, and Bengaluru, our investigative reach extends across tier-1 and tier-2 industrial clusters in India, coupled with correspondent networks in Singapore, Dubai, and London for cross-border inquiries.
            </p>
            <div style={{ fontSize: '13px', color: '#86868B' }}>
              Strict legal firewall between investigative research and third-party disclosure.
            </div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '18px', border: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Lock size={18} color="#0071E3" />
              <strong style={{ fontSize: '15px', color: '#1D1D1F' }}>Privileged Inquiry Protocol</strong>
            </div>
            <p style={{ fontSize: '13px', color: '#6E6E73', lineHeight: 1.5, margin: 0 }}>
              Direct partner retention enables counsel to structure engagements under formal legal privilege, safeguarding preliminary work product during ongoing dispute resolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
