import React, { useEffect, useState, useRef } from 'react';
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
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ArrowUpRight, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft,
  Sparkles
} from 'lucide-react';
import { preventiveServicesData, type ServiceDetail } from '../data/services';

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
};

interface PreventiveForensicsProps {
  onOpenConsultation?: () => void;
}

export const PreventiveForensics: React.FC<PreventiveForensicsProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail>(preventiveServicesData[0]);
  const location = useLocation();
  const showcaseRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const hasDragged = useRef(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pillsRef.current) return;
    setIsDragging(true);
    hasDragged.current = false;
    setStartX(e.pageX - pillsRef.current.offsetLeft);
    setScrollLeftPos(pillsRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !pillsRef.current) return;
    e.preventDefault();
    const x = e.pageX - pillsRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 4) {
      hasDragged.current = true;
    }
    pillsRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const scrollToTop = () => {
    if (showcaseRef.current) {
      const yOffset = -90; // offset for floating navbar
      const y = showcaseRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      if ((window as any).__lenis) {
        (window as any).__lenis.scrollTo(y, { immediate: false, duration: 0.9 });
      } else {
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const handleSelectService = (service: ServiceDetail, shouldScrollTop = false) => {
    setSelectedService(service);
    if (shouldScrollTop) {
      scrollToTop();
    }
    const pillBtn = document.getElementById(`pill-${service.id}`);
    if (pillBtn) {
      pillBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  const scrollPills = (direction: 'left' | 'right') => {
    if (pillsRef.current) {
      const amount = direction === 'left' ? -260 : 260;
      pillsRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const handlePillWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (pillsRef.current && e.deltaY !== 0) {
      pillsRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    document.title = 'Preventive Forensics | HERRLICH GROUP';

    const hash = (location.hash || window.location.hash).replace('#', '');
    if (hash) {
      const match = preventiveServicesData.find((s) => s.id === hash);
      if (match) {
        setSelectedService(match);
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

  const ActiveIcon = iconMap[selectedService.iconName] || ShieldCheck;
  const currentIndex = preventiveServicesData.findIndex((s) => s.id === selectedService.id);
  const prevService = currentIndex > 0 ? preventiveServicesData[currentIndex - 1] : null;
  const nextService = currentIndex < preventiveServicesData.length - 1 ? preventiveServicesData[currentIndex + 1] : null;

  return (
    <div className="section" style={{ paddingTop: '36px', paddingBottom: '96px' }}>
      <div className="container">
        {/* Page Breadcrumb & Category Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#86868B', marginBottom: '16px' }}>
          <Link to="/" style={{ color: '#0071E3', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={12} />
          <span>Practice Areas</span>
          <ChevronRight size={12} />
          <span style={{ color: '#1D1D1F', fontWeight: 600 }}>Preventive Forensics</span>
        </div>

        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
            <Sparkles size={13} color="#0071E3" />
            <span>PROACTIVE RISK & GOVERNANCE</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(34px, 4.5vw, 52px)' }}>
            Preventive Forensics
          </h1>
          <p className="section-subtitle" style={{ fontSize: 'clamp(17px, 2vw, 20px)' }}>
            Know your risks. Strengthen your controls. Protect your business before irregularities turn into institutional crises.
          </p>
        </div>

        {/* Horizontal Scrollable Jump Pills with Side Arrows */}
        <div style={{ position: 'relative', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            onClick={() => scrollPills('left')}
            aria-label="Scroll left"
            style={{
              flexShrink: 0,
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#1D1D1F',
              transition: 'all 160ms ease',
              zIndex: 2
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <div 
            ref={pillsRef}
            onWheel={handlePillWheel}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ 
              display: 'flex', 
              gap: '10px', 
              overflowX: 'auto', 
              whiteSpace: 'nowrap', 
              padding: '8px 4px', 
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
              flex: 1
            }}
          >
            {preventiveServicesData.map((s) => {
              const Icon = iconMap[s.iconName] || ShieldCheck;
              const isSelected = selectedService.id === s.id;
              return (
                <button
                  key={s.id}
                  id={`pill-${s.id}`}
                  type="button"
                  onClick={() => {
                    if (hasDragged.current) return;
                    handleSelectService(s, false);
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '13.5px',
                    fontWeight: isSelected ? 650 : 500,
                    background: isSelected ? '#1D1D1F' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : '#555558',
                    border: '1px solid',
                    borderColor: isSelected ? '#1D1D1F' : 'rgba(0, 0, 0, 0.08)',
                    whiteSpace: 'nowrap',
                    cursor: isDragging ? 'grabbing' : 'pointer',
                    flexShrink: 0,
                    transition: 'all 160ms ease',
                    boxShadow: isSelected ? '0 4px 14px rgba(0,0,0,0.12)' : 'var(--shadow-sm)'
                  }}
                >
                  <Icon size={15} color={isSelected ? '#FFFFFF' : '#0071E3'} />
                  <span>{s.title}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollPills('right')}
            aria-label="Scroll right"
            style={{
              flexShrink: 0,
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#1D1D1F',
              transition: 'all 160ms ease',
              zIndex: 2
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Selected Service Detailed Showcase */}
        <div 
          ref={showcaseRef}
          id={selectedService.id}
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.06)',
            padding: 'clamp(28px, 4vw, 48px)',
            marginBottom: '64px'
          }}
        >
          {/* Top Banner Tagline & Badge */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '24px', marginBottom: '32px' }}>
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
                <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#0071E3', marginTop: '4px' }}>
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

          {/* Overview Statement */}
          <div style={{ marginBottom: '36px' }}>
            <p style={{ fontSize: '17px', color: '#1D1D1F', lineHeight: 1.65, fontWeight: 450, margin: '0 0 16px' }}>
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

          {/* Grid: What Our Approach Delivers (Left) & Systematic Methodology (Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            {/* Left: How our approach helps */}
            <div style={{ background: '#FBFBFD', borderRadius: '18px', padding: '28px', border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#86868B', marginBottom: '16px' }}>
                Operational Objectives & Capabilities
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 650, color: '#1D1D1F', marginBottom: '20px' }}>
                How Our Approach Protects Your Organisation:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {selectedService.helpsPoints.map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={17} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', color: '#424245', lineHeight: 1.5 }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Systematic Methodology */}
            <div style={{ background: '#FBFBFD', borderRadius: '18px', padding: '28px', border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#86868B', marginBottom: '16px' }}>
                Execution Discipline
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 650, color: '#1D1D1F', marginBottom: '20px' }}>
                Herrlich Group's Structured Methodology:
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {selectedService.approach.map((step, idx) => (
                  <div key={step.step} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div 
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '999px',
                        background: '#1D1D1F',
                        color: '#FFFFFF',
                        fontSize: '11.5px',
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
                      <strong style={{ fontSize: '14px', color: '#1D1D1F' }}>{step.step}: </strong>
                      <span style={{ fontSize: '13.5px', color: '#6E6E73', lineHeight: 1.5 }}>{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Institutional Commitment & Statutory Governance */}
          <div 
            style={{
              padding: '24px',
              borderRadius: '16px',
              background: 'rgba(0, 113, 227, 0.04)',
              border: '1px solid rgba(0, 113, 227, 0.12)',
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start'
            }}
          >
            <ShieldCheck size={22} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1D1D1F', marginBottom: '4px' }}>
                Our Institutional Commitment
              </div>
              <p style={{ fontSize: '13px', color: '#424245', lineHeight: 1.6, margin: 0 }}>
                {selectedService.commitment}
              </p>
            </div>
          </div>
        </div>

        {/* Next / Previous Discipline Pagination Controls - Centered & Prominent */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '28px 24px',
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
            marginBottom: '48px',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            {prevService && (
              <button
                type="button"
                onClick={() => handleSelectService(prevService, true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  borderRadius: 'var(--radius-pill)',
                  background: '#F5F5F7',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  color: '#1D1D1F',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 160ms ease'
                }}
              >
                <ArrowLeft size={16} />
                <span>Previous: {prevService.title}</span>
              </button>
            )}

            {nextService ? (
              <button
                type="button"
                onClick={() => handleSelectService(nextService, true)}
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 34px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '15px',
                  fontWeight: 650,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.16)'
                }}
              >
                <span>Next: {nextService.title}</span>
                <ArrowRight size={17} />
              </button>
            ) : (
              <Link
                to="/detective-forensics"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 34px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '15px',
                  fontWeight: 650,
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.16)'
                }}
              >
                <span>Explore Detective Forensics</span>
                <ArrowRight size={17} />
              </Link>
            )}
          </div>

          <div style={{ fontSize: '13px', color: '#86868B', fontWeight: 600 }}>
            {currentIndex + 1} of {preventiveServicesData.length} Preventive Disciplines
          </div>
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
              CONFIDENTIAL RISK MITIGATION
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '14px' }}>
              Need an Independent Diagnostic Assessment?
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, margin: 0 }}>
              Speak confidentially with our forensic accountants and governance specialists to evaluate your internal controls, whistleblowing protocols, or third-party risk profile.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={onOpenConsultation}
              style={{ background: '#0071E3', color: '#FFFFFF', padding: '14px 28px' }}
            >
              <span>Request Consultation</span>
              <ArrowUpRight size={15} />
            </button>
            <Link
              to="/detective-forensics"
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
              <span>Explore Detective Forensics</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

