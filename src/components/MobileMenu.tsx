import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  ArrowRight, 
  ChevronDown,
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
  ShieldCheck
} from 'lucide-react';
import { mainNavItems, preventiveDropdownItems, detectiveDropdownItems } from '../data/navigation';
import logoImg from '../assets/logo.png';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose,
  onOpenConsultation 
}) => {
  const location = useLocation();

  const [expandedDropdown, setExpandedDropdown] = useState<'preventive' | 'detective' | null>(() => {
    if (location.pathname.startsWith('/preventive-forensics')) return 'preventive';
    if (location.pathname.startsWith('/detective-forensics')) return 'detective';
    return null;
  });

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const getDropdownIcon = (name: string): React.ElementType => {
    // Preventive
    if (name.includes('Fraud Risk')) return ShieldAlert;
    if (name.includes('Whistleblowing')) return Megaphone;
    if (name.includes('Ombudsman')) return Scale;
    if (name.includes('Employee Reference')) return UserCheck;
    if (name.includes('Vendor Reference')) return Building2;
    if (name.includes('Matrimonial Reference')) return HeartHandshake;
    if (name.includes('Covert Market')) return Compass;
    if (name.includes('UPSI')) return Lock;
    if (name.includes('Insider Trading')) return TrendingUp;
    // Detective
    if (name.includes('Private Investigations')) return Search;
    if (name.includes('Digital Forensics')) return Cpu;
    if (name.includes('Asset Tracing')) return Coins;
    if (name.includes('Counter Surveillance')) return Scan;
    if (name.includes('Data Analysis')) return BarChart3;
    if (name.includes('Document Verification')) return FileText;
    if (name.includes('Handwriting')) return PenTool;
    if (name.includes('Signature')) return CheckCircle2;
    return ShieldCheck;
  };

  const toggleDropdown = (type: 'preventive' | 'detective') => {
    setExpandedDropdown((prev) => (prev === type ? null : type));
  };

  if (!isOpen) return null;

  return (
    <div 
      className="mobile-menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(29, 29, 31, 0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '16px',
        animation: 'fadeIn 200ms ease forwards'
      }}
      onClick={onClose}
    >
      <div 
        className="mobile-menu-card"
        style={{
          width: '100%',
          maxWidth: '480px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(32px) saturate(180%)',
          WebkitBackdropFilter: 'blur(32px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          borderRadius: '28px',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.16)',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 'calc(100vh - 32px)',
          overflowY: 'auto',
          padding: '24px 20px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img 
              src={logoImg} 
              alt="Herrlich Group" 
              style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block' }} 
            />
          </div>
          <button 
            type="button" 
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '999px',
              background: 'rgba(0, 0, 0, 0.05)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1D1D1F'
            }}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Primary Links & Expandable Accordion Dropdowns */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '20px' }}>
          {mainNavItems.map((item) => {
            const isPreventive = item.name === 'Preventive Forensics';
            const isDetective = item.name === 'Detective Forensics';

            // Preventive Forensics Dropdown Accordion
            if (isPreventive) {
              const isExpanded = expandedDropdown === 'preventive';
              const isActive = location.pathname.startsWith('/preventive-forensics');

              return (
                <div key={item.name} style={{ display: 'flex', flexDirection: 'column' }}>
                  <button
                    type="button"
                    onClick={() => toggleDropdown('preventive')}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '13px 16px',
                      borderRadius: '14px',
                      border: 'none',
                      cursor: 'pointer',
                      background: isActive || isExpanded ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                      color: isActive ? '#0071E3' : '#1D1D1F',
                      fontWeight: isActive || isExpanded ? 650 : 500,
                      fontSize: '15.5px',
                      textAlign: 'left',
                      transition: 'all 150ms ease'
                    }}
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      size={17} 
                      style={{ 
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', 
                        transition: 'transform 220ms ease',
                        color: isExpanded ? '#0071E3' : '#86868B'
                      }} 
                    />
                  </button>

                  {/* Expanded Preventive Services List */}
                  {isExpanded && (
                    <div 
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                        padding: '6px 8px 10px 10px',
                        margin: '4px 0 8px 8px',
                        background: 'rgba(0, 0, 0, 0.025)',
                        borderRadius: '16px',
                        borderLeft: '3px solid #0071E3'
                      }}
                    >
                      {/* Overview Link */}
                      <Link
                        to={item.href}
                        onClick={onClose}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          fontSize: '13px',
                          fontWeight: 700,
                          color: '#0071E3',
                          textDecoration: 'none',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                          marginBottom: '4px'
                        }}
                      >
                        <span>Overview & All Preventive Services</span>
                        <ArrowRight size={13} color="#0071E3" />
                      </Link>

                      {/* 9 Preventive Disciplines */}
                      {preventiveDropdownItems.map((subItem) => {
                        const IconComponent = getDropdownIcon(subItem.name);
                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={onClose}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              padding: '9px 12px',
                              borderRadius: '10px',
                              fontSize: '13px',
                              color: '#333336',
                              fontWeight: 500,
                              textDecoration: 'none',
                              transition: 'background 140ms ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(0, 113, 227, 0.06)';
                              e.currentTarget.style.color = '#0071E3';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = '#333336';
                            }}
                          >
                            <IconComponent size={15} color="#0071E3" style={{ flexShrink: 0 }} />
                            <span>{subItem.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // Detective Forensics Dropdown Accordion
            if (isDetective) {
              const isExpanded = expandedDropdown === 'detective';
              const isActive = location.pathname.startsWith('/detective-forensics');

              return (
                <div key={item.name} style={{ display: 'flex', flexDirection: 'column' }}>
                  <button
                    type="button"
                    onClick={() => toggleDropdown('detective')}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '13px 16px',
                      borderRadius: '14px',
                      border: 'none',
                      cursor: 'pointer',
                      background: isActive || isExpanded ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                      color: isActive ? '#0071E3' : '#1D1D1F',
                      fontWeight: isActive || isExpanded ? 650 : 500,
                      fontSize: '15.5px',
                      textAlign: 'left',
                      transition: 'all 150ms ease'
                    }}
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      size={17} 
                      style={{ 
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', 
                        transition: 'transform 220ms ease',
                        color: isExpanded ? '#0071E3' : '#86868B'
                      }} 
                    />
                  </button>

                  {/* Expanded Detective Services List */}
                  {isExpanded && (
                    <div 
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                        padding: '6px 8px 10px 10px',
                        margin: '4px 0 8px 8px',
                        background: 'rgba(0, 0, 0, 0.025)',
                        borderRadius: '16px',
                        borderLeft: '3px solid #0071E3'
                      }}
                    >
                      {/* Overview Link */}
                      <Link
                        to={item.href}
                        onClick={onClose}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          fontSize: '13px',
                          fontWeight: 700,
                          color: '#0071E3',
                          textDecoration: 'none',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                          marginBottom: '4px'
                        }}
                      >
                        <span>Overview & All Detective Services</span>
                        <ArrowRight size={13} color="#0071E3" />
                      </Link>

                      {/* 8 Detective Disciplines */}
                      {detectiveDropdownItems.map((subItem) => {
                        const IconComponent = getDropdownIcon(subItem.name);
                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={onClose}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              padding: '9px 12px',
                              borderRadius: '10px',
                              fontSize: '13px',
                              color: '#333336',
                              fontWeight: 500,
                              textDecoration: 'none',
                              transition: 'background 140ms ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(0, 113, 227, 0.06)';
                              e.currentTarget.style.color = '#0071E3';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = '#333336';
                            }}
                          >
                            <IconComponent size={15} color="#0071E3" style={{ flexShrink: 0 }} />
                            <span>{subItem.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // Regular Nav Links (Home, About Us, Industries, Contact)
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '13px 16px',
                  borderRadius: '14px',
                  background: isActive ? 'rgba(0, 0, 0, 0.06)' : 'transparent',
                  color: isActive ? '#0071E3' : '#1D1D1F',
                  fontWeight: isActive ? 650 : 500,
                  fontSize: '15.5px',
                  textDecoration: 'none',
                  transition: 'background 150ms ease'
                }}
              >
                <span>{item.name}</span>
                <ArrowRight size={16} opacity={isActive ? 0.9 : 0.4} />
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Contact Channel */}
        <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(0, 0, 0, 0.08)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {onOpenConsultation && (
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              style={{ width: '100%', padding: '13px', borderRadius: 'var(--radius-pill)', justifyContent: 'center' }}
            >
              <span>Request Consultation</span>
              <ArrowRight size={15} />
            </button>
          )}

          <div style={{ textAlign: 'center', fontSize: '12px', color: '#86868B', marginTop: '4px' }}>
            Privileged Inquiries: <strong style={{ color: '#1D1D1F' }}>contact@herrlichindia.com</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
