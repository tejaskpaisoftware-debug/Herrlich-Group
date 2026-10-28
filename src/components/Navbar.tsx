import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowUpRight, 
  Search, 
  ShieldAlert, 
  ArrowRight, 
  ChevronRight,
  Megaphone,
  Scale,
  UserCheck,
  Building2,
  HeartHandshake,
  Compass,
  Lock,
  TrendingUp,
  Cpu,
  Coins,
  Scan,
  BarChart3,
  FileText,
  PenTool,
  CheckCircle2
} from 'lucide-react';
import { 
  mainNavItems, 
  preventiveDropdownItems, 
  detectiveDropdownItems 
} from '../data/navigation';
import logoImg from '../assets/logo.png';

interface NavbarProps {
  onOpenConsultation?: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenConsultation, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'preventive' | 'detective' | null>(null);
  const location = useLocation();
  const dropdownNavRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menuKey: 'preventive' | 'detective') => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash, setMobileMenuOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownNavRef.current && !dropdownNavRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    return Shield;
  };

  return (
    <header className={`glass-navbar-wrapper ${scrolled ? 'scrolled' : 'unscrolled'}`} role="banner">
      <nav 
        ref={dropdownNavRef}
        className={`glass-navbar ${scrolled ? 'scrolled' : 'unscrolled'}`}
        aria-label="Main Navigation"
      >
        {/* Apple iOS Liquid Glass Substrate & Refraction Layers */}
        <div className="liquid-glass-substrate" aria-hidden="true" />

        {/* Brand Logo / Mark */}
        <Link 
          to="/" 
          className="brand-mark" 
          aria-label="Herrlich Group Homepage"
        >
          <img 
            src={logoImg} 
            alt="Herrlich Group - Uncovering Truths. Ensuring Justice" 
            className="brand-logo-img"
          />
        </Link>

        {/* Center Desktop Navigation Links */}
        <ul className="nav-links" role="menubar">
          {mainNavItems.map((item) => {
            // Preventive Forensics Dropdown
            if (item.name === 'Preventive Forensics') {
              const isDropdownOpen = openDropdown === 'preventive';
              const isActive = location.pathname.startsWith('/preventive-forensics');
              return (
                <li 
                  key={item.name} 
                  className="nav-item" 
                  onMouseEnter={() => handleMouseEnter('preventive')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/preventive-forensics"
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      if (window.innerWidth <= 960) {
                        e.preventDefault();
                        setOpenDropdown(isDropdownOpen ? null : 'preventive');
                      }
                    }}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                    id="preventive-menu-button"
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      size={14} 
                      style={{ 
                        transition: 'transform 200ms ease',
                        transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
                      }} 
                    />
                  </Link>

                  {/* Dropdown Menu - Vertical List */}
                  <div 
                    className={`nav-dropdown ${isDropdownOpen ? 'open' : ''}`}
                    role="menu"
                    aria-labelledby="preventive-menu-button"
                  >
                    <div className="dropdown-list">
                      {preventiveDropdownItems.map((subItem) => {
                        const Icon = getDropdownIcon(subItem.name);
                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="dropdown-list-item"
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className="dropdown-list-icon">
                              <Icon size={16} />
                            </div>
                            <div className="dropdown-list-info">
                              <div className="dropdown-list-title">{subItem.name}</div>
                              <div className="dropdown-list-desc">{subItem.description}</div>
                            </div>
                            <ChevronRight size={14} className="dropdown-list-arrow" />
                          </Link>
                        );
                      })}
                    </div>

                    <div className="dropdown-list-footer">
                      <Link 
                        to="/preventive-forensics" 
                        className="dropdown-list-all"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span>All Preventive Forensics Suite</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </li>
              );
            }

            // Detective Forensics Dropdown
            if (item.name === 'Detective Forensics') {
              const isDropdownOpen = openDropdown === 'detective';
              const isActive = location.pathname.startsWith('/detective-forensics');
              return (
                <li 
                  key={item.name} 
                  className="nav-item" 
                  onMouseEnter={() => handleMouseEnter('detective')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/detective-forensics"
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      if (window.innerWidth <= 960) {
                        e.preventDefault();
                        setOpenDropdown(isDropdownOpen ? null : 'detective');
                      }
                    }}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                    id="detective-menu-button"
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      size={14} 
                      style={{ 
                        transition: 'transform 200ms ease',
                        transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
                      }} 
                    />
                  </Link>

                  {/* Dropdown Menu - Vertical List */}
                  <div 
                    className={`nav-dropdown ${isDropdownOpen ? 'open' : ''}`}
                    role="menu"
                    aria-labelledby="detective-menu-button"
                  >
                    <div className="dropdown-list">
                      {detectiveDropdownItems.map((subItem) => {
                        const Icon = getDropdownIcon(subItem.name);
                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="dropdown-list-item"
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className="dropdown-list-icon">
                              <Icon size={16} />
                            </div>
                            <div className="dropdown-list-info">
                              <div className="dropdown-list-title">{subItem.name}</div>
                              <div className="dropdown-list-desc">{subItem.description}</div>
                            </div>
                            <ChevronRight size={14} className="dropdown-list-arrow" />
                          </Link>
                        );
                      })}
                    </div>

                    <div className="dropdown-list-footer">
                      <Link 
                        to="/detective-forensics" 
                        className="dropdown-list-all"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span>All Detective Forensics Suite</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </li>
              );
            }

            const isActive = location.pathname === item.href;
            return (
              <li key={item.name} className="nav-item" role="none">
                <Link
                  to={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  role="menuitem"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right CTA / Action Cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {onOpenConsultation && (
            <button
              type="button"
              className="btn-primary desktop-cta"
              onClick={onOpenConsultation}
              aria-label="Request Private Consultation"
            >
              <span>Request Consultation</span>
              <ArrowUpRight size={15} />
            </button>
          )}

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
