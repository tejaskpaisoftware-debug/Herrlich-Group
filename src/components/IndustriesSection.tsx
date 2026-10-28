import React from 'react';
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
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { industriesData } from '../data/industries';

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

export const IndustriesSection: React.FC = () => {
  const featuredIndustries = industriesData.slice(0, 6);

  return (
    <section className="section" id="industries" style={{ background: '#FFFFFF' }} aria-labelledby="industries-heading">
      <div className="container">
        <div className="section-header" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px' }}>
          <div>
            <div className="eyebrow">
              <Briefcase size={14} color="#0071E3" />
              <span>INDUSTRIES CATERING</span>
            </div>
            <h2 id="industries-heading" className="section-title">
              Sector-Specific Forensic Acumen.
            </h2>
            <p className="section-subtitle" style={{ maxWidth: '640px' }}>
              Delivering specialised investigation, verification, and risk intelligence across 20 diverse industry sectors.
            </p>
          </div>

          <Link 
            to="/industries" 
            className="btn-primary" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              padding: '12px 24px',
              fontSize: '13.5px'
            }}
          >
            <span>View All 20 Sectors</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Responsive Grid of Featured Sectors */}
        <div className="grid-3">
          {featuredIndustries.map((ind) => {
            const Icon = industryIconMap[ind.iconName] || Briefcase;

            return (
              <div 
                key={ind.id}
                className="solid-card"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'var(--bg-primary)',
                  border: '1px solid rgba(0, 0, 0, 0.07)',
                  borderRadius: '20px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div 
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'rgba(0, 113, 227, 0.08)',
                        color: '#0071E3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#86868B' }}>
                      #{ind.number}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '19px', fontWeight: 650, color: '#1D1D1F', marginBottom: '8px' }}>
                    {ind.title}
                  </h3>

                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#0071E3', marginBottom: '14px', lineHeight: 1.4 }}>
                    {ind.tagline}
                  </p>

                  <p style={{ fontSize: '14px', color: '#6E6E73', lineHeight: 1.55, marginBottom: '20px' }}>
                    {ind.description}
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(0, 0, 0, 0.06)' }}>
                  <Link 
                    to={`/industries#${ind.id}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      color: '#1D1D1F'
                    }}
                  >
                    <span>View Sector Engagements</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Bar */}
        <div 
          style={{ 
            marginTop: '40px',
            textAlign: 'center',
            padding: '24px',
            background: 'var(--bg-primary)',
            borderRadius: '18px',
            border: '1px solid rgba(0,0,0,0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px'
          }}
        >
          <span style={{ fontSize: '14px', color: '#555558' }}>
            Looking for Automobile, Energy, Construction, Banking, Telecom, or other specialized sectors?
          </span>
          <Link 
            to="/industries" 
            style={{ 
              color: '#0071E3', 
              fontWeight: 650, 
              fontSize: '14px', 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span>Explore Complete 20 Industries Matrix</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};
