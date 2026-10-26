import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { mainNavItems } from '../data/navigation';
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
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

        {/* Primary Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '20px' }}>
          {mainNavItems.map((item) => {
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
                  color: isActive ? '#1D1D1F' : '#555558',
                  fontWeight: isActive ? 650 : 500,
                  fontSize: '15.5px',
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
            Privileged Inquiries: <strong style={{ color: '#1D1D1F' }}>intake@herrlichgroup.com</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
