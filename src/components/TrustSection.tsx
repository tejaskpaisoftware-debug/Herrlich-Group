import React from 'react';
import { Globe2, ShieldCheck, Scale, FileText } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const capabilities = [
    {
      title: 'Pan-Geographic Reach',
      subtitle: 'Multi-jurisdictional intelligence networks across key commercial centers',
      icon: Globe2,
    },
    {
      title: 'Evidentiary Chain of Custody',
      subtitle: 'Court-admissible documentation protocols designed for judicial rigor',
      icon: Scale,
    },
    {
      title: 'Senior Multi-Disciplinary Counsel',
      subtitle: 'Led by career forensic accountants, intelligence analysts, and former counsel',
      icon: ShieldCheck,
    },
    {
      title: 'Strict Ethical Governance',
      subtitle: 'Zero-compromise compliance with local and international statutory limits',
      icon: FileText,
    },
  ];

  return (
    <section className="section" style={{ paddingTop: '20px', paddingBottom: '60px' }} aria-label="Professional Credentials">
      <div className="container">
        {/* Capability Cards Grid */}
        <div className="trust-bar">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="trust-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div 
                    style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '10px', 
                      background: 'rgba(0, 113, 227, 0.08)',
                      color: '#0071E3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 style={{ fontSize: '15.5px', fontWeight: 650, color: '#1D1D1F', letterSpacing: '-0.015em' }}>
                    {item.title}
                  </h3>
                </div>
                <p className="trust-item-label">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
