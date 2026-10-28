import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, MapPin, Mail } from 'lucide-react';
import { mainNavItems } from '../data/navigation';
import logoImg from '../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Brand Column */}
          <div>
            <div className="brand-mark" style={{ marginBottom: '16px' }}>
              <img 
                src={logoImg} 
                alt="Herrlich Group" 
                style={{ height: '68px', width: 'auto', objectFit: 'contain', display: 'block' }} 
              />
            </div>

            <p style={{ fontSize: '13.5px', color: '#6E6E73', lineHeight: 1.6, maxWidth: '320px', marginBottom: '20px' }}>
              Herrlich Group delivers institutional corporate intelligence, multi-jurisdictional due diligence, and fraud risk consulting for corporate leadership and audit committees.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#1D1D1F', fontWeight: 550 }}>
              <Lock size={14} color="#0071E3" />
              <span>Privileged & Strictly Confidential Practice</span>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="footer-title">Forensic Practices</h4>
            <ul className="footer-links">
              <li>
                <Link to="/preventive-forensics" className="footer-link" style={{ fontWeight: 600, color: '#0071E3' }}>
                  Preventive Forensics Suite →
                </Link>
              </li>
              <li>
                <Link to="/preventive-forensics#fraud-risk-assessment" className="footer-link">
                  Fraud Risk Assessment
                </Link>
              </li>
              <li>
                <Link to="/preventive-forensics#whistleblowing-mechanism" className="footer-link">
                  Whistleblowing Mechanism
                </Link>
              </li>
              <li>
                <Link to="/preventive-forensics#prevention-of-insider-trading" className="footer-link">
                  Prevention of Insider Trading
                </Link>
              </li>
              <li style={{ marginTop: '10px' }}>
                <Link to="/detective-forensics" className="footer-link" style={{ fontWeight: 600, color: '#0071E3' }}>
                  Detective Forensics Suite →
                </Link>
              </li>
              <li>
                <Link to="/detective-forensics#private-investigations" className="footer-link">
                  Private Investigations
                </Link>
              </li>
              <li>
                <Link to="/detective-forensics#digital-forensics" className="footer-link">
                  Digital Forensics
                </Link>
              </li>
              <li>
                <Link to="/detective-forensics#asset-tracing" className="footer-link">
                  Asset Tracing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-title">Organization</h4>
            <ul className="footer-links">
              {mainNavItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy-policy" className="footer-link">
                  Privacy & Data Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Office & Branch Inquiries */}
          <div>
            <h4 className="footer-title">Corporate Office</h4>
            
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '13px', color: '#555558', lineHeight: 1.55, marginBottom: '16px' }}>
              <MapPin size={16} color="#0071E3" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span>
                1210-12, Vihav CBD, Near Bright School, Opposite Nyara Petrol pump, TP3, Vasna Bhaily Road, Vadodara 391410, Gujarat, India
              </span>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '11px', fontWeight: 650, color: '#86868B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                Corporate Contact
              </div>
              <a 
                href="mailto:contact@herrlichindia.com" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  fontSize: '13px', 
                  fontWeight: 600, 
                  color: '#0071E3',
                  textDecoration: 'none' 
                }}
              >
                <Mail size={13} />
                <span>contact@herrlichindia.com</span>
              </a>
            </div>

            <div>
              <div style={{ fontSize: '11px', fontWeight: 650, color: '#86868B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                Branch Offices
              </div>
              <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '12px', padding: 0, margin: 0 }}>
                <li>
                  <a href="mailto:Ahmedabad@herrlichindia.com" className="footer-link" style={{ display: 'inline-flex', gap: '4px' }}>
                    <span style={{ fontWeight: 600, color: '#1D1D1F' }}>Ahmedabad:</span>
                    <span>Ahmedabad@herrlichindia.com</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:Gurgaon@herrlichindia.com" className="footer-link" style={{ display: 'inline-flex', gap: '4px' }}>
                    <span style={{ fontWeight: 600, color: '#1D1D1F' }}>Gurgaon:</span>
                    <span>Gurgaon@herrlichindia.com</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:Dubai@herrlichindia.com" className="footer-link" style={{ display: 'inline-flex', gap: '4px' }}>
                    <span style={{ fontWeight: 600, color: '#1D1D1F' }}>Dubai:</span>
                    <span>Dubai@herrlichindia.com</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:Thailand@herrlichindia.com" className="footer-link" style={{ display: 'inline-flex', gap: '4px' }}>
                    <span style={{ fontWeight: 600, color: '#1D1D1F' }}>Thailand:</span>
                    <span>Thailand@herrlichindia.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Herrlich Group. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link to="/privacy-policy" className="footer-link" style={{ fontSize: '12.5px' }}>
              Privacy Statement
            </Link>
            <Link to="/privacy-policy#terms" className="footer-link" style={{ fontSize: '12.5px' }}>
              Terms of Engagement
            </Link>
            <span style={{ fontSize: '12px', color: '#86868B' }}>
              Institutional Forensic Standards
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
