import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  Megaphone,
  Scale,
  UserCheck, 
  Building2,
  HeartHandshake,
  Compass, 
  Lock,
  TrendingUp,
  Search,
  Cpu, 
  Coins,
  Scan,
  BarChart3,
  FileText,
  PenTool,
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { allServicesData } from '../data/services';

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  Megaphone,
  Scale,
  UserCheck,
  Building2,
  HeartHandshake,
  Compass,
  Lock,
  TrendingUp,
  Search,
  Cpu,
  Coins,
  Scan,
  BarChart3,
  FileText,
  PenTool,
  CheckCircle2,
};

export const ServicesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Preventive Forensics' | 'Detective Forensics'>('All');

  const filteredServices = activeFilter === 'All' 
    ? allServicesData 
    : allServicesData.filter(s => s.category === activeFilter);

  return (
    <section className="section section-lg" id="services" aria-labelledby="services-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <Sparkles size={14} color="#0071E3" />
            <span>PRACTICE CAPABILITIES</span>
          </div>
          <h2 id="services-heading" className="section-title">
            Preventive & Detective Forensics.
          </h2>
          <p className="section-subtitle">
            Comprehensive corporate intelligence designed to identify vulnerabilities before losses occur, and assemble court-admissible evidence when facts matter most.
          </p>

          {/* Interactive Filter Pills */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '10px', 
              marginTop: '28px' 
            }}
          >
            {(['All', 'Preventive Forensics', 'Detective Forensics'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '9px 20px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '13.5px',
                  fontWeight: activeFilter === cat ? 650 : 500,
                  background: activeFilter === cat ? '#1D1D1F' : 'rgba(255, 255, 255, 0.9)',
                  color: activeFilter === cat ? '#FFFFFF' : '#6E6E73',
                  border: '1px solid',
                  borderColor: activeFilter === cat ? '#1D1D1F' : 'rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  transition: 'all 180ms ease',
                  boxShadow: activeFilter === cat ? '0 4px 14px rgba(0,0,0,0.12)' : 'var(--shadow-sm)'
                }}
              >
                {cat === 'All' ? 'All Practice Areas (17)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Practice Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          {filteredServices.map((service) => {
            const Icon = iconMap[service.iconName] || ShieldCheck;
            const targetRoute = service.category === 'Preventive Forensics' 
              ? `/preventive-forensics#${service.id}` 
              : `/detective-forensics#${service.id}`;

            return (
              <div 
                key={service.id} 
                className="service-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 200ms ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <div 
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'rgba(0, 113, 227, 0.08)',
                        color: '#0071E3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span 
                      style={{ 
                        fontSize: '11px', 
                        fontWeight: 700, 
                        letterSpacing: '0.06em', 
                        textTransform: 'uppercase', 
                        color: service.category === 'Preventive Forensics' ? '#0071E3' : '#1D1D1F',
                        background: service.category === 'Preventive Forensics' ? 'rgba(0, 113, 227, 0.06)' : 'rgba(0,0,0,0.05)',
                        padding: '4px 10px',
                        borderRadius: '999px'
                      }}
                    >
                      {service.category === 'Preventive Forensics' ? 'Preventive' : 'Detective'}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 650, color: '#1D1D1F', marginBottom: '8px' }}>
                    {service.title}
                  </h3>
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#0071E3', marginBottom: '12px' }}>
                    {service.tagline}
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#6E6E73', lineHeight: 1.55, marginBottom: '20px' }}>
                    {service.shortDesc}
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <Link
                    to={targetRoute}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      color: '#0071E3',
                      textDecoration: 'none'
                    }}
                  >
                    <span>View Methodology & Scope</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Deep Link Bar */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '24px 32px',
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.75)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div>
            <div style={{ fontSize: '15px', fontWeight: 650, color: '#1D1D1F' }}>
              Explore Dedicated Forensic Portals
            </div>
            <div style={{ fontSize: '13px', color: '#6E6E73', marginTop: '2px' }}>
              Detailed procedural workflows, evidentiary chain of custody, and regulatory compliance scopes.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              to="/preventive-forensics"
              className="btn-secondary"
              style={{ fontSize: '13.5px', padding: '10px 18px' }}
            >
              <span>Preventive Forensics</span>
              <ArrowRight size={14} />
            </Link>

            <Link
              to="/detective-forensics"
              className="btn-primary"
              style={{ fontSize: '13.5px', padding: '10px 18px' }}
            >
              <span>Detective Forensics</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
