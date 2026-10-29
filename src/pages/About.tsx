import React, { useEffect, useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Building2, 
  ShieldCheck, 
  Target, 
  Eye, 
  Lock, 
  Scale, 
  FileSearch, 
  Cpu, 
  FileText, 
  Compass, 
  TrendingUp, 
  Maximize2, 
  X, 
  ChevronRight, 
  Sparkles, 
  Users,
  Award,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface AboutProps {
  onOpenConsultation?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const [isClienteleModalOpen, setIsClienteleModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'About Us | HERRLICH GROUP';
    window.scrollTo(0, 0);
  }, []);

  const coreApproach = [
    {
      title: 'Confidentiality',
      desc: 'We treat sensitive information with care and seek to maintain appropriate confidentiality throughout every engagement.',
      icon: Lock,
    },
    {
      title: 'Objectivity',
      desc: 'We focus on facts, evidence, and impartial assessment to support informed decision-making.',
      icon: Target,
    },
    {
      title: 'Professional Integrity',
      desc: 'We value ethical conduct, responsible practices, and respect for applicable laws and regulations.',
      icon: ShieldCheck,
    },
    {
      title: 'Attention to Detail',
      desc: 'We recognise that meaningful findings often depend on careful examination, structured analysis, and thorough documentation.',
      icon: Eye,
    },
    {
      title: 'Client-Focused Solutions',
      desc: 'We seek to understand each client’s concerns and provide services aligned with their objectives and specific circumstances.',
      icon: Users,
    },
  ];

  const functionalAreas = [
    {
      number: '01',
      title: 'Corporate Investigations & Intelligence',
      icon: FileSearch,
      desc: 'Focused on examining reported concerns, gathering relevant information through lawful means, conducting corporate investigations, and developing insights that support informed decision-making.',
      credential: 'Led by former leaders who have served with esteemed organisations like SFIO, CBI & Central Vigilance Teams of Public Sector enterprises.',
      badge: 'SFIO & CBI Veterans',
    },
    {
      number: '02',
      title: 'Fraud Risk Assessment & Prevention',
      icon: Scale,
      desc: 'Focused on identifying potential fraud vulnerabilities, assessing risk exposures, reviewing relevant processes, and supporting stronger internal controls and preventive measures.',
      credential: 'Headed by Qualified Chartered Accountants with more than 20 years of premier professional experience.',
      badge: '20+ Yrs CA Leadership',
    },
    {
      number: '03',
      title: 'Digital Forensics & Forensic Data Analysis',
      icon: Cpu,
      desc: 'Focused on the systematic examination of digital information and relevant data to assist in understanding incidents, identifying potential irregularities, and supporting evidence-based assessments.',
      credential: 'Our leaders are credentialed forensic experts from various globally recognised institutions.',
      badge: 'Global Forensic Experts',
    },
    {
      number: '04',
      title: 'Document, Handwriting & Signature Verification',
      icon: FileText,
      desc: 'Focused on the examination of questioned documents, handwriting, signatures, and related materials to help assess authenticity, identify inconsistencies, and support appropriate further review.',
      credential: 'Examined by certified question-document and handwriting forensic scientists accredited worldwide.',
      badge: 'Certified Forensic Examiners',
    },
    {
      number: '05',
      title: 'Corporate Governance, Ethics & Whistleblowing',
      icon: ShieldCheck,
      desc: 'Focused on supporting whistleblowing mechanisms, independent grievance-handling processes, ombudsman services, and initiatives that promote accountability, ethical conduct, and organisational transparency.',
      credential: 'Guided by senior governance experts with prior tenures across SFIO, CBI, and public sector vigilance bodies.',
      badge: 'Institutional Governance',
    },
    {
      number: '06',
      title: 'Background Verification & Reference Checks',
      icon: Bot,
      desc: 'Focused on employee, vendor, and matrimonial reference checks, subject to appropriate consent, lawful access, and the nature of the engagement.',
      credential: 'Our team is qualified enough to undertake multi-tier reference checks and we have deployed specialized BOTs for automated open-source searches.',
      badge: 'AI & Automated BOT Search',
    },
    {
      number: '07',
      title: 'Asset Tracing & Specialised Investigative Support',
      icon: Compass,
      desc: 'Focused on lawful asset-tracing assignments, counter-surveillance services, and other specialised investigative requirements, in accordance with applicable laws and authorisations.',
      credential: 'Structured by investigative leaders who have worked with premier enforcement and regulatory agencies.',
      badge: 'Multi-Jurisdictional Tracing',
    },
    {
      number: '08',
      title: 'Market Intelligence & Regulatory Risk',
      icon: TrendingUp,
      desc: 'Focused on relevant market intelligence and support concerning unpublished price-sensitive information (UPSI) and insider-trading-related matters, with appropriate regard to applicable legal and regulatory requirements.',
      credential: 'Architected by senior corporate intelligence analysts and regulatory compliance advisors.',
      badge: 'SEBI & UPSI Governance',
    },
  ];

  return (
    <div className="section" style={{ paddingTop: '36px', paddingBottom: '96px' }}>
      <div className="container">
        {/* Page Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#86868B', marginBottom: '16px' }}>
          <Link to="/" style={{ color: '#0071E3', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={12} />
          <span style={{ color: '#1D1D1F', fontWeight: 600 }}>About Us</span>
        </div>

        {/* Hero Introduction Profile with IMG_8562 */}
        <div className="editorial-split" style={{ marginBottom: '80px', alignItems: 'center' }}>
          <div>
            <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
              <Sparkles size={13} color="#0071E3" />
              <span>UNCOVERING TRUTHS. ENSURING JUSTICE.</span>
            </div>
            <h1 style={{ fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 750, color: '#1D1D1F', marginBottom: '20px', letterSpacing: '-0.025em', lineHeight: 1.18 }}>
              Protecting Interests. Strengthening Governance. Managing Risks.
            </h1>
            <p style={{ fontSize: '16px', color: '#424245', lineHeight: 1.65, marginBottom: '16px' }}>
              Herrlich Group is committed to helping organisations protect their interests, strengthen governance, manage risks, and make informed decisions through investigative, intelligence, and forensic services.
            </p>
            <p style={{ fontSize: '15px', color: '#6E6E73', lineHeight: 1.65, marginBottom: '20px' }}>
              In today's complex business environment, organisations face evolving challenges involving fraud, misconduct, information security, regulatory compliance, and corporate accountability. At Herrlich Group, we recognise the importance of reliable information, objective assessments, and a proactive approach to identifying and addressing potential risks.
            </p>
            <p style={{ fontSize: '14.5px', color: '#6E6E73', lineHeight: 1.65, marginBottom: '28px' }}>
              Our service portfolio encompasses fraud risk assessment, whistleblowing mechanisms, ombudsman services, employee and vendor reference checks, matrimonial reference checks, covert market intelligence, private investigations, digital forensics, asset tracing, counter-surveillance, forensic data analysis, handwriting and signature verification, document verification, and matters relating to unpublished price-sensitive information and prevention of insider trading.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn-primary"
                onClick={onOpenConsultation}
              >
                <span>Request Partner Discussion</span>
                <ArrowUpRight size={14} />
              </button>
              <Link to="/preventive-forensics" className="btn-secondary">
                <span>Explore Forensic Services</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div 
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                background: '#FFFFFF'
              }}
            >
              <img
                src="/IMG_8562.jpg"
                alt="Herrlich Group Journey and Services Wall"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision Showcase */}
        <div style={{ marginBottom: '80px' }}>
          <div className="grid-2" style={{ gap: '28px' }}>
            {/* Mission Card */}
            <div 
              className="solid-card" 
              style={{ 
                padding: '40px 36px', 
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(0, 113, 227, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={22} color="#0071E3" />
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1D1D1F', margin: 0 }}>
                  Our Mission
                </h2>
              </div>
              <p style={{ fontSize: '15.5px', color: '#424245', lineHeight: 1.65, marginBottom: '16px' }}>
                To provide reliable investigative, intelligence, and forensic support that helps clients identify risks, establish facts, promote ethical conduct, and protect their legitimate interests.
              </p>
              <div 
                style={{ 
                  padding: '12px 18px', 
                  borderRadius: '14px', 
                  background: 'rgba(0, 113, 227, 0.06)', 
                  border: '1px solid rgba(0, 113, 227, 0.15)',
                  fontSize: '13.5px',
                  fontWeight: 650,
                  color: '#0071E3',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Award size={16} />
                <span>All our evidences are admissible in court under different acts and rules.</span>
              </div>
            </div>

            {/* Vision Card */}
            <div 
              className="solid-card" 
              style={{ 
                padding: '40px 36px', 
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(52, 199, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Eye size={22} color="#34C759" />
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1D1D1F', margin: 0 }}>
                  Our Vision
                </h2>
              </div>
              <p style={{ fontSize: '15.5px', color: '#424245', lineHeight: 1.65, margin: 0 }}>
                To be a trusted name in investigative and forensic services, recognised for integrity, professionalism, confidentiality, and a commitment to responsible business practices.
              </p>
              <div style={{ marginTop: '20px', fontSize: '13.5px', color: '#6E6E73', lineHeight: 1.6 }}>
                We aim to support businesses, corporates, and individuals in uncovering relevant facts, identifying vulnerabilities, examining concerns, and developing a clearer understanding of the issues that matter.
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach - 5 Pillars */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-header" style={{ maxWidth: '780px', marginBottom: '36px' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '12px' }}>
              <ShieldCheck size={13} color="#0071E3" />
              <span>CORE PRINCIPLES</span>
            </div>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#1D1D1F', marginBottom: '10px' }}>
              Our Approach
            </h2>
            <p className="section-subtitle">
              Our approach emphasises discretion, professional integrity, analytical thinking, and attention to detail, with each engagement shaped by its specific objectives and requirements.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {coreApproach.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '28px 24px',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 4px 18px rgba(0, 0, 0, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(0, 113, 227, 0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                      <Icon size={20} color="#0071E3" />
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: 650, color: '#1D1D1F', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#6E6E73', lineHeight: 1.55, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Commitment Banner */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #1D1D1F 0%, #2C2C2E 100%)',
            borderRadius: '24px',
            padding: 'clamp(32px, 5vw, 54px)',
            color: '#FFFFFF',
            marginBottom: '80px',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.12)'
          }}
        >
          <div style={{ maxWidth: '880px' }}>
            <div style={{ fontSize: '11.5px', fontWeight: 750, color: '#0071E3', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              OUR INSTITUTIONAL COMMITMENT
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.25, marginBottom: '16px' }}>
              "Informed decisions begin with clarity, accountability begins with transparency, and trust is strengthened through integrity."
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.65, marginBottom: '24px' }}>
              Whether addressing suspected fraud, examining sensitive concerns, assessing potential risks, or supporting stronger corporate governance, our objective is to help clients move forward with greater clarity and confidence.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', borderRadius: 'var(--radius-pill)', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '14px', fontWeight: 650, color: '#FFFFFF' }}>
              <ShieldCheck size={16} color="#0071E3" />
              <span>Herrlich Group — Uncovering Truths and Ensuring Justice.</span>
            </div>
          </div>
        </div>

        {/* NEW SECTION: Our Clientele - Illustrative Infographic Presentation */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-header" style={{ maxWidth: '820px', marginBottom: '32px' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '12px' }}>
              <Award size={13} color="#0071E3" />
              <span>OUR CLIENTELE — ILLUSTRATIVE</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.4vw, 36px)', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              Trusted by Leading Organisations Across Diverse Industries
            </h2>
            <p className="section-subtitle">
              Serving prominent enterprises ranging from high-growth ventures to multinational corporate groups exceeding ₹20,000 Crores in valuation.
            </p>
          </div>

          {/* Infographic Presentation Card - Clean, Uncropped */}
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 16px 44px rgba(0, 0, 0, 0.05)',
              padding: 'clamp(24px, 4vw, 44px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            {/* Left Content Column */}
            <div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span style={{ padding: '6px 14px', borderRadius: 'var(--radius-pill)', background: 'rgba(0, 113, 227, 0.08)', color: '#0071E3', fontSize: '12px', fontWeight: 650 }}>
                  Confidential
                </span>
                <span style={{ padding: '6px 14px', borderRadius: 'var(--radius-pill)', background: 'rgba(52, 199, 89, 0.08)', color: '#34C759', fontSize: '12px', fontWeight: 650 }}>
                  Professional
                </span>
                <span style={{ padding: '6px 14px', borderRadius: 'var(--radius-pill)', background: 'rgba(88, 86, 214, 0.08)', color: '#5856D6', fontSize: '12px', fontWeight: 650 }}>
                  Independent
                </span>
                <span style={{ padding: '6px 14px', borderRadius: 'var(--radius-pill)', background: 'rgba(255, 149, 0, 0.08)', color: '#FF9500', fontSize: '12px', fontWeight: 650 }}>
                  Results Driven
                </span>
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1D1D1F', marginBottom: '14px', lineHeight: 1.3 }}>
                Multi-Tier Scale & Comprehensive Service Coverage
              </h3>
              <p style={{ fontSize: '15px', color: '#555558', lineHeight: 1.65, marginBottom: '24px' }}>
                Our engagement portfolio bridges diverse industries with structured partnerships built on lasting trust. From large conglomerates with revenues surpassing ₹20,000 Crores to established enterprises above ₹1,000 Crores, our evidentiary standards remain rigorous and consistent.
              </p>

              {/* 4 Scale Tiers Summary */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '14px', marginBottom: '28px' }}>
                <div style={{ padding: '14px 16px', borderRadius: '16px', background: '#F5F5F7', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: '11px', color: '#6E6E73', fontWeight: 650, textTransform: 'uppercase' }}>Enterprise Tier 1</div>
                  <div style={{ fontSize: '16px', fontWeight: 750, color: '#0071E3' }}>Clients &gt; ₹20,000 Cr</div>
                </div>
                <div style={{ padding: '14px 16px', borderRadius: '16px', background: '#F5F5F7', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: '11px', color: '#6E6E73', fontWeight: 650, textTransform: 'uppercase' }}>Enterprise Tier 2</div>
                  <div style={{ fontSize: '16px', fontWeight: 750, color: '#34C759' }}>Clients &gt; ₹10,000 Cr</div>
                </div>
                <div style={{ padding: '14px 16px', borderRadius: '16px', background: '#F5F5F7', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: '11px', color: '#6E6E73', fontWeight: 650, textTransform: 'uppercase' }}>Enterprise Tier 3</div>
                  <div style={{ fontSize: '16px', fontWeight: 750, color: '#5856D6' }}>Clients &gt; ₹5,000 Cr</div>
                </div>
                <div style={{ padding: '14px 16px', borderRadius: '16px', background: '#F5F5F7', border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: '11px', color: '#6E6E73', fontWeight: 650, textTransform: 'uppercase' }}>Enterprise Tier 4</div>
                  <div style={{ fontSize: '16px', fontWeight: 750, color: '#00A2C7' }}>Clients &gt; ₹1,000 Cr</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsClienteleModalOpen(true)}
                className="btn-primary"
                style={{ padding: '12px 24px', fontSize: '13.5px', gap: '8px' }}
              >
                <Maximize2 size={15} />
                <span>View Full Clientele Chart</span>
              </button>
            </div>

            {/* Right Image Display - Clean, Full Aspect Ratio, No Blue Background Container */}
            <div 
              onClick={() => setIsClienteleModalOpen(true)}
              style={{ 
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                background: '#FFFFFF'
              }}
            >
              <img 
                src="/clientele_illustrative_infographic.jpg" 
                alt="Herrlich Group Our Clientele Illustrative Infographic"
                style={{
                  width: '100%',
                  maxHeight: '580px',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
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
                  background: 'rgba(0, 0, 0, 0.78)',
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
                <span>Enlarge</span>
              </div>
            </div>
          </div>
        </div>

        {/* Multidisciplinary Team & 8 Core Functional Areas */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-header" style={{ maxWidth: '840px', marginBottom: '36px' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '12px' }}>
              <Users size={13} color="#0071E3" />
              <span>MULTIDISCIPLINARY EXPERTISE</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.4vw, 36px)', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              Our Team & Core Functional Areas
            </h2>
            <p className="section-subtitle">
              At Herrlich Group, our team composition is designed around the diverse requirements of investigative services, forensic examination, corporate intelligence, risk assessment, and organisational accountability.
            </p>
          </div>

          {/* 8 Core Functional Area Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px', marginBottom: '40px' }}>
            {functionalAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.number}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '22px',
                    padding: '30px 28px',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 200ms ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.03)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(0, 113, 227, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={22} color="#0071E3" />
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#86868B' }}>
                        {area.number}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18.5px', fontWeight: 700, color: '#1D1D1F', marginBottom: '10px', lineHeight: 1.35 }}>
                      {area.title}
                    </h3>

                    <p style={{ fontSize: '13.5px', color: '#555558', lineHeight: 1.6, marginBottom: '18px' }}>
                      {area.desc}
                    </p>
                  </div>

                  <div 
                    style={{ 
                      padding: '12px 14px', 
                      borderRadius: '14px', 
                      background: '#F5F5F7', 
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      fontSize: '12.5px',
                      color: '#1D1D1F',
                      lineHeight: 1.5,
                      fontWeight: 500
                    }}
                  >
                    <span style={{ fontWeight: 650, color: '#0071E3' }}>Domain Leadership: </span>
                    <span>{area.credential}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* An Integrated Working Approach Card */}
          <div 
            style={{
              background: '#F5F5F7',
              borderRadius: '20px',
              padding: '32px 32px',
              border: '1px solid rgba(0, 0, 0, 0.07)'
            }}
          >
            <div style={{ fontSize: '12px', fontWeight: 750, color: '#0071E3', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              COLLABORATIVE METHODOLOGY
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              An Integrated Working Approach
            </h3>
            <p style={{ fontSize: '14.5px', color: '#555558', lineHeight: 1.65, margin: 0 }}>
              Our functional areas are designed to complement one another, allowing us to consider assignments from multiple perspectives where appropriate. Depending on the nature and complexity of an engagement, relevant capabilities may be coordinated to support a structured, confidential, and client-focused approach. We emphasise clear objectives, responsible information handling, professional independence, and appropriate documentation throughout the engagement process.
            </p>
          </div>
        </div>

        {/* Integrated Group Architecture & Practice Entities with IMG_8563 */}
        <div className="editorial-split" style={{ marginBottom: '80px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div 
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 16px 44px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                background: '#FFFFFF'
              }}
            >
              <img
                src="/IMG_8563.jpg"
                alt="Herrlich Group Corporate Practice Entities and Associates Wall"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <div className="eyebrow">
              <Building2 size={14} color="#0071E3" />
              <span>GROUP ECOSYSTEM</span>
            </div>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: '#1D1D1F', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              A Unified Ecosystem of Specialized Practices
            </h2>
            <p style={{ fontSize: '15.5px', color: '#6E6E73', lineHeight: 1.65, marginBottom: '20px' }}>
              Our operations combine the specialized capabilities of Herrlich Consulting, Sarang Pandya & Associates, and Secures Dot under one integrated standard of investigative rigor and corporate governance.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#1D1D1F' }}>Herrlich Consulting: </strong>
                  <span style={{ fontSize: '14px', color: '#6E6E73' }}>Strategic fraud mitigation, forensic audit, and enterprise risk advisory.</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#1D1D1F' }}>Sarang Pandya & Associates: </strong>
                  <span style={{ fontSize: '14px', color: '#6E6E73' }}>Evidentiary review, legal counsel support, and statutory compliance.</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#0071E3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#1D1D1F' }}>Secures Dot: </strong>
                  <span style={{ fontSize: '14px', color: '#6E6E73' }}>Field intelligence gathering, counter-surveillance, and digital integrity checks.</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn-secondary"
              onClick={onOpenConsultation}
            >
              <span>Engage Our Advisory Group</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Operational Infrastructure & Confidential Facilities Showcase with IMG_8556 & IMG_8558 */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <div className="eyebrow">
              <Building2 size={14} color="#0071E3" />
              <span>HEADQUARTERS & INFRASTRUCTURE</span>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1D1D1F', marginBottom: '12px' }}>
              Purpose-Built for Confidentiality & Analytical Depth
            </h2>
            <p className="section-subtitle">
              Engineered with biometric access controls, isolated consultation suites, and dedicated workstations for institutional corporate advisory.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '32px' }}>
            {/* Facility Card 1 - IMG_8556 */}
            <div 
              className="solid-card"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#FFFFFF',
                boxShadow: '0 16px 44px rgba(0, 0, 0, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.9)'
              }}
            >
              <div className="facility-img-frame">
                <img
                  src="/IMG_8556.jpg"
                  alt="Herrlich Group Advanced Forensic Analysis Workstations"
                  style={{ objectPosition: 'center 40%' }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: '28px 24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1D1D1F', marginBottom: '8px' }}>
                  Advanced Analytical Workspaces
                </h3>
                <p style={{ fontSize: '14.5px', color: '#6E6E73', lineHeight: 1.6, margin: 0 }}>
                  High-security digital workstations equipped for forensic document examination, complex financial modeling, and open-source intelligence synthesis.
                </p>
              </div>
            </div>

            {/* Facility Card 2 - IMG_8558 */}
            <div 
              className="solid-card"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#FFFFFF',
                boxShadow: '0 16px 44px rgba(0, 0, 0, 0.07)',
                border: '1px solid rgba(255, 255, 255, 0.9)'
              }}
            >
              <div className="facility-img-frame">
                <img
                  src="/IMG_8558.jpg"
                  alt="Herrlich Group Privileged Consultation and Intake Suites"
                  style={{ objectPosition: 'center 35%' }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: '28px 24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1D1D1F', marginBottom: '8px' }}>
                  Privileged Consultation Cabins
                </h3>
                <p style={{ fontSize: '14.5px', color: '#6E6E73', lineHeight: 1.6, margin: 0 }}>
                  Acoustically insulated private briefing suites and dedicated intake desks structured for strict non-disclosure and sensitive executive consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Clientele Infographic */}
      {isClienteleModalOpen && (
        <div 
          onClick={() => setIsClienteleModalOpen(false)}
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
                Our Clientele — Illustrative Portfolio
              </div>
              <button
                type="button"
                onClick={() => setIsClienteleModalOpen(false)}
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
                src="/clientele_illustrative_infographic.jpg" 
                alt="Our Clientele Illustrative Full Infographic Chart"
                style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
