import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { 
  preventiveServicesData, 
  detectiveServicesData, 
  allServicesData, 
  type ServiceDetail 
} from '../data/services';

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

interface ServicesPageProps {
  onOpenConsultation?: () => void;
}

export const Services: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'preventive' | 'detective'>('preventive');
  const [selectedService, setSelectedService] = useState<ServiceDetail>(preventiveServicesData[0]);
  const location = useLocation();

  useEffect(() => {
    document.title = 'Practice Areas & Forensic Disciplines | HERRLICH GROUP';

    const hash = (location.hash || window.location.hash).replace('#', '');
    if (hash) {
      const match = allServicesData.find((s) => s.id === hash);
      if (match) {
        setSelectedService(match);
        setActiveTab(match.category === 'Preventive Forensics' ? 'preventive' : 'detective');
      }
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  const currentList = activeTab === 'preventive' ? preventiveServicesData : detectiveServicesData;
  const ActiveIcon = iconMap[selectedService.iconName] || ShieldCheck;

  return (
    <div className="section" style={{ paddingTop: '36px', paddingBottom: '96px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
            <Sparkles size={13} color="#0071E3" />
            <span>SPECIALIZED PRACTICE AREAS</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(34px, 4.5vw, 52px)' }}>
            Corporate & Forensic Intelligence
          </h1>
          <p className="section-subtitle" style={{ fontSize: 'clamp(17px, 2vw, 20px)' }}>
            Herrlich Group operates two integrated forensic pillars: <strong>Preventive Forensics</strong> to safeguard enterprise integrity before crisis occurs, and <strong>Detective Forensics</strong> to establish verifiable facts and evidentiary findings.
          </p>
        </div>

        {/* Dual Pillar Switcher Tabs */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => {
              setActiveTab('preventive');
              setSelectedService(preventiveServicesData[0]);
            }}
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '14.5px',
              fontWeight: 650,
              cursor: 'pointer',
              background: activeTab === 'preventive' ? '#1D1D1F' : '#FFFFFF',
              color: activeTab === 'preventive' ? '#FFFFFF' : '#1D1D1F',
              border: '1px solid',
              borderColor: activeTab === 'preventive' ? '#1D1D1F' : 'rgba(0, 0, 0, 0.1)',
              boxShadow: activeTab === 'preventive' ? '0 6px 18px rgba(0,0,0,0.12)' : 'var(--shadow-sm)',
              transition: 'all 180ms ease'
            }}
          >
            Preventive Forensics (9 Services)
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('detective');
              setSelectedService(detectiveServicesData[0]);
            }}
            style={{
              padding: '12px 24px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '14.5px',
              fontWeight: 650,
              cursor: 'pointer',
              background: activeTab === 'detective' ? '#1D1D1F' : '#FFFFFF',
              color: activeTab === 'detective' ? '#FFFFFF' : '#1D1D1F',
              border: '1px solid',
              borderColor: activeTab === 'detective' ? '#1D1D1F' : 'rgba(0, 0, 0, 0.1)',
              boxShadow: activeTab === 'detective' ? '0 6px 18px rgba(0,0,0,0.12)' : 'var(--shadow-sm)',
              transition: 'all 180ms ease'
            }}
          >
            Detective Forensics (8 Services)
          </button>

          <Link
            to={activeTab === 'preventive' ? '/preventive-forensics' : '/detective-forensics'}
            style={{
              marginLeft: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '12px 20px',
              borderRadius: 'var(--radius-pill)',
              background: 'rgba(0, 113, 227, 0.08)',
              color: '#0071E3',
              fontSize: '13.5px',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            <span>View Dedicated {activeTab === 'preventive' ? 'Preventive' : 'Detective'} Page</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Jump Selector within active tab */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '8px', 
            overflowX: 'auto', 
            paddingBottom: '16px', 
            marginBottom: '44px',
            scrollbarWidth: 'none'
          }}
        >
          {currentList.map((s) => {
            const isSelected = selectedService.id === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setSelectedService(s);
                  const el = document.getElementById(s.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '13px',
                  fontWeight: isSelected ? 650 : 500,
                  background: isSelected ? '#0071E3' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#6E6E73',
                  border: '1px solid',
                  borderColor: isSelected ? '#0071E3' : 'rgba(0, 0, 0, 0.08)',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 160ms ease',
                  boxShadow: isSelected ? '0 4px 12px rgba(0, 113, 227, 0.25)' : 'var(--shadow-sm)'
                }}
              >
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase */}
        <div 
          id={selectedService.id}
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 16px 44px rgba(0, 0, 0, 0.06)',
            padding: 'clamp(28px, 4vw, 48px)',
            marginBottom: '64px'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '24px', marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(0, 113, 227, 0.08)',
                  color: '#0071E3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <ActiveIcon size={24} />
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#1D1D1F', letterSpacing: '-0.02em', margin: 0 }}>
                  {selectedService.title}
                </h2>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#0071E3', marginTop: '4px' }}>
                  {selectedService.tagline}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn-primary"
              onClick={onOpenConsultation}
              style={{ padding: '11px 22px', fontSize: '13.5px' }}
            >
              <span>Consult on {selectedService.title}</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontSize: '16.5px', color: '#1D1D1F', lineHeight: 1.65, margin: '0 0 16px' }}>
              {selectedService.overview}
            </p>
            <div 
              style={{
                display: 'inline-block',
                background: 'rgba(0, 113, 227, 0.06)',
                borderLeft: '3px solid #0071E3',
                padding: '10px 16px',
                borderRadius: '0 10px 10px 0',
                fontSize: '14px',
                fontWeight: 600,
                color: '#1D1D1F'
              }}
            >
              "{selectedService.quote}"
            </div>
          </div>

          {/* 2-Column Details: Helps & Methodology */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', marginBottom: '36px' }}>
            <div style={{ background: '#FBFBFD', borderRadius: '18px', padding: '26px', border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#86868B', marginBottom: '14px' }}>
                Key Capabilities & Impact
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 650, color: '#1D1D1F', marginBottom: '18px' }}>
                How Our Approach Helps:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {selectedService.helpsPoints.map((pt, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={16} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '13.5px', color: '#424245', lineHeight: 1.5 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: '#FBFBFD', borderRadius: '18px', padding: '26px', border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#86868B', marginBottom: '14px' }}>
                Structured Methodology
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 650, color: '#1D1D1F', marginBottom: '18px' }}>
                Herrlich Group Execution Approach:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {selectedService.approach.map((step, idx) => (
                  <div key={step.step} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div 
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '999px',
                        background: '#1D1D1F',
                        color: '#FFFFFF',
                        fontSize: '11px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '1px'
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <strong style={{ fontSize: '13.5px', color: '#1D1D1F' }}>{step.step}: </strong>
                      <span style={{ fontSize: '13px', color: '#6E6E73', lineHeight: 1.5 }}>{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Commitment */}
          <div 
            style={{
              padding: '22px',
              borderRadius: '16px',
              background: 'rgba(0, 113, 227, 0.04)',
              border: '1px solid rgba(0, 113, 227, 0.12)',
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start'
            }}
          >
            <ShieldCheck size={20} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1D1D1F', marginBottom: '4px' }}>
                Our Institutional Commitment
              </div>
              <p style={{ fontSize: '13px', color: '#424245', lineHeight: 1.6, margin: 0 }}>
                {selectedService.commitment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
