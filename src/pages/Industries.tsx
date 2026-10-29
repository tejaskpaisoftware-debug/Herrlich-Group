import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  FlaskConical, 
  Car, 
  Cog, 
  Pill, 
  Shirt, 
  Zap, 
  Store, 
  Film, 
  Hotel, 
  Hammer,
  HardHat, 
  Cpu, 
  Landmark, 
  Leaf, 
  Radio, 
  Plane, 
  GraduationCap, 
  Gem, 
  Sparkles,
  ShieldCheck,
  Lightbulb,
  BarChart3,
  Handshake,
  ArrowUpRight,
  Search,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  ChevronRight,
  Maximize2,
  X
} from 'lucide-react';
import { industriesData, industryPillars } from '../data/industries';

const industryIconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  FlaskConical,
  Car,
  Cog,
  Pill,
  Shirt,
  Zap,
  Store,
  Film,
  Hotel,
  Hammer,
  HardHat,
  Cpu,
  Landmark,
  Leaf,
  Radio,
  Plane,
  GraduationCap,
  Gem,
  Sparkles,
};

const pillarIconMap: Record<string, React.ElementType> = {
  Handshake,
  Lightbulb,
  ShieldCheck,
  BarChart3,
};

interface IndustriesPageProps {
  onOpenConsultation?: () => void;
}

export const Industries: React.FC<IndustriesPageProps> = ({ onOpenConsultation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    document.title = 'Industries Catering | HERRLICH GROUP';
    window.scrollTo(0, 0);

    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const filteredIndustries = industriesData.filter((ind) => {
    const q = searchTerm.toLowerCase();
    return (
      ind.title.toLowerCase().includes(q) ||
      ind.tagline.toLowerCase().includes(q) ||
      ind.primaryServices.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="section" style={{ paddingTop: '36px', paddingBottom: '96px' }}>
      <div className="container">
        {/* Page Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#86868B', marginBottom: '16px' }}>
          <Link to="/" style={{ color: '#0071E3', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={12} />
          <span style={{ color: '#1D1D1F', fontWeight: 600 }}>Industries Catering</span>
        </div>

        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '860px', marginBottom: '40px' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
            <Briefcase size={13} color="#0071E3" />
            <span>INDUSTRIES CATERING</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(32px, 4.2vw, 48px)', letterSpacing: '-0.025em', lineHeight: 1.18 }}>
            Delivering Specialised Investigation, Verification & Risk Intelligence Across Diverse Industries.
          </h1>
          <p className="section-subtitle" style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: '#555558', marginTop: '14px' }}>
            From high-velocity consumer supply chains and heavy manufacturing to regulated life sciences, technology, and financial institutions — Herrlich Group deploys sector-calibrated forensic depth across 20 diverse domains.
          </p>
        </div>

        {/* 4 Strategic Pillars Banner (from Infographic) */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '16px', 
            marginBottom: '48px' 
          }}
        >
          {industryPillars.map((pillar) => {
            const Icon = pillarIconMap[pillar.iconName] || ShieldCheck;
            return (
              <div
                key={pillar.title}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '22px 20px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px'
                }}
              >
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(0, 113, 227, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon size={20} color="#0071E3" />
                </div>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1D1D1F', marginBottom: '4px' }}>
                    {pillar.title}
                  </div>
                  <p style={{ fontSize: '12px', color: '#6E6E73', lineHeight: 1.5, margin: 0 }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Visual Infographic Card & Overview */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #1D1D1F 0%, #2C2C2E 100%)',
            borderRadius: '24px',
            padding: 'clamp(28px, 4vw, 48px)',
            color: '#FFFFFF',
            marginBottom: '56px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ fontSize: '11px', fontWeight: 750, color: '#0071E3', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              PROPRIETARY SECTOR INTELLIGENCE
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.25, marginBottom: '16px' }}>
              Multi-Sector Diagnostic Capabilities
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.65, marginBottom: '20px' }}>
              Our operational teams evaluate each engagement through the lens of industry-specific threat models. Whether conducting covert asset recovery in heavy cement distribution or forensic digital extractions in semiconductor R&D, our methodologies are structured to withstand board and judicial scrutiny.
            </p>
            <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, marginBottom: '28px' }}>
              The architecture chart maps all 20 specialized industry practices catered to by Herrlich Group, combining fact-finding, brand protection, and evidentiary forensics.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  borderRadius: 'var(--radius-pill)',
                  background: '#0071E3',
                  color: '#FFFFFF',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 160ms ease',
                  boxShadow: '0 4px 14px rgba(0, 113, 227, 0.35)'
                }}
              >
                <Maximize2 size={15} />
                <span>Open Full-Screen Chart</span>
              </button>
              <button
                type="button"
                onClick={onOpenConsultation}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 160ms ease'
                }}
              >
                <span>Request Sector Briefing</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Full Infographic Display - Clean, No Blue Container or Border */}
          <div 
            onClick={() => setIsLightboxOpen(true)}
            style={{ 
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)'
            }}
          >
            <img 
              src="/industries_catering_infographic.jpg" 
              alt="Herrlich Group Industries Catering Architecture Infographic"
              style={{
                width: '100%',
                maxHeight: '660px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '18px',
                transition: 'transform 260ms ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.015)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <div 
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                background: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                padding: '7px 14px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '11.5px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Maximize2 size={13} />
              <span>Full Screen</span>
            </div>
          </div>
        </div>

        {/* Search & Sector Jump Pills */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1D1D1F', margin: 0 }}>
                20 Core Practice Sectors
              </h2>
              <span style={{ fontSize: '13px', color: '#86868B' }}>
                Select any sector below to inspect specific threat vectors and recommended service engagements
              </span>
            </div>

            {/* Quick Search */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                background: '#FFFFFF', 
                border: '1px solid rgba(0,0,0,0.1)', 
                borderRadius: 'var(--radius-pill)', 
                padding: '8px 16px',
                width: '100%',
                maxWidth: '320px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <Search size={15} color="#86868B" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search sector or service..."
                style={{
                  border: 'none',
                  outline: 'none',
                  fontSize: '13px',
                  color: '#1D1D1F',
                  width: '100%',
                  background: 'transparent'
                }}
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#86868B' }}
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Quick Jump Badges */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '8px', 
              padding: '4px 0' 
            }}
          >
            {industriesData.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-pill)',
                  background: '#FFFFFF',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  fontSize: '12.5px',
                  fontWeight: 550,
                  color: '#424245',
                  textDecoration: 'none',
                  transition: 'all 160ms ease',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0071E3';
                  e.currentTarget.style.color = '#0071E3';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.color = '#424245';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#0071E3' }}>{ind.number}.</span>
                <span>{ind.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 20 Industry Deep-Dive Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '28px' }}>
          {filteredIndustries.map((ind) => {
            const Icon = industryIconMap[ind.iconName] || Briefcase;

            return (
              <div 
                key={ind.id}
                id={ind.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '22px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                  padding: '30px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 200ms ease, box-shadow 200ms ease',
                  scrollMarginTop: '110px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.04)';
                }}
              >
                <div>
                  {/* Card Header: Number Badge, Icon, Title */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div 
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          background: 'rgba(0, 113, 227, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Icon size={22} color="#0071E3" />
                      </div>
                      <div>
                        <div style={{ fontSize: '11px', fontWeight: 750, color: '#0071E3', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                          SECTOR #{ind.number}
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1D1D1F', margin: 0, letterSpacing: '-0.015em' }}>
                          {ind.title}
                        </h3>
                      </div>
                    </div>

                    <span 
                      style={{
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-pill)',
                        background: '#F5F5F7',
                        fontSize: '11.5px',
                        fontWeight: 650,
                        color: '#6E6E73'
                      }}
                    >
                      #{ind.number}
                    </span>
                  </div>

                  {/* Tagline */}
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#0071E3', marginBottom: '12px', lineHeight: 1.4 }}>
                    {ind.tagline}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '13.5px', color: '#555558', lineHeight: 1.6, marginBottom: '20px' }}>
                    {ind.description}
                  </p>

                  {/* Primary Recommended Services Badges */}
                  <div style={{ marginBottom: '22px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#86868B', marginBottom: '8px' }}>
                      Primary Forensic Engagements:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {ind.primaryServices.map((service, sIdx) => (
                        <span
                          key={sIdx}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-pill)',
                            background: '#F5F5F7',
                            border: '1px solid rgba(0, 0, 0, 0.07)',
                            fontSize: '12px',
                            fontWeight: 550,
                            color: '#1D1D1F'
                          }}
                        >
                          <CheckCircle2 size={11} color="#0071E3" />
                          <span>{service}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Challenges / Vectors Accordion preview */}
                  {ind.keyChallenges && ind.keyChallenges.length > 0 && (
                    <div style={{ background: 'var(--bg-primary)', borderRadius: '14px', padding: '14px 16px', marginBottom: '20px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#FF3B30', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                        <AlertCircle size={13} />
                        <span>Critical Risk Vectors</span>
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {ind.keyChallenges.slice(0, 3).map((ch, chIdx) => (
                          <li key={chIdx} style={{ fontSize: '12px', color: '#48484A', display: 'flex', gap: '6px', lineHeight: 1.45 }}>
                            <span style={{ color: '#FF3B30', fontWeight: 700 }}>•</span>
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(0, 0, 0, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link
                    to="/contact"
                    style={{
                      fontSize: '12.5px',
                      color: '#6E6E73',
                      textDecoration: 'none',
                      fontWeight: 500
                    }}
                  >
                    Confidential Inquiry
                  </Link>

                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="btn-secondary"
                    style={{ fontSize: '12.5px', padding: '7px 16px', gap: '6px' }}
                  >
                    <span>Consult on {ind.title}</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Action Banner */}
        <div 
          style={{
            marginTop: '80px',
            background: 'linear-gradient(135deg, #1D1D1F 0%, #2C2C2E 100%)',
            borderRadius: '24px',
            padding: 'clamp(32px, 5vw, 64px)',
            color: '#FFFFFF',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0071E3', marginBottom: '12px' }}>
              BESPOKE SECTOR ARCHITECTURE
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '14px' }}>
              Operating in an Unlisted or Cross-Industry Matrix?
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, margin: 0 }}>
              Herrlich Group frequently structures privileged retainers for family conglomerates, PE portfolio companies, and specialized joint ventures requiring customized forensic protocols under strict mutual non-disclosure.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={onOpenConsultation}
              style={{ background: '#0071E3', color: '#FFFFFF', padding: '14px 28px' }}
            >
              <span>Schedule Senior Partner Call</span>
              <ArrowUpRight size={15} />
            </button>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 24px',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <span>Transmit Scope</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Infographic */}
      {isLightboxOpen && (
        <div 
          onClick={() => setIsLightboxOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(12px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '920px',
              maxHeight: '92vh',
              background: '#FFFFFF',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div 
              style={{ 
                padding: '16px 24px', 
                background: '#1D1D1F', 
                color: '#FFFFFF', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between' 
              }}
            >
              <div style={{ fontWeight: 650, fontSize: '15px' }}>
                Industries Catering — Architecture Chart
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>
            </div>
            <div style={{ overflowY: 'auto', padding: '16px', display: 'flex', justifyContent: 'center' }}>
              <img 
                src="/industries_catering_infographic.jpg" 
                alt="Industries Catering Architecture Infographic Chart"
                style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
