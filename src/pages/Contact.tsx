import React, { useEffect, useState } from 'react';
import { Lock, Send, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceCategory: 'Fraud Risk Assessment',
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; refId: string } | null>(null);

  useEffect(() => {
    document.title = 'Confidential Consultation | HERRLICH GROUP';
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Corporate email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid corporate email';
    }
    if (formData.phone && !/^[+0-9\s\-()]{7,20}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid telephone format';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide preliminary engagement context';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing the scope';
    }
    if (!formData.privacyConsent) {
      errs.privacyConsent = 'You must confirm the non-disclosure acknowledgement';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        name: formData.name,
        refId: 'HG-' + Math.floor(100000 + Math.random() * 900000),
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceCategory: 'Fraud Risk Assessment',
        message: '',
        privacyConsent: false,
      });
    }, 1200);
  };

  return (
    <div className="section" style={{ paddingTop: '36px', paddingBottom: '96px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header center" style={{ maxWidth: '720px', margin: '0 auto 48px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <Lock size={14} color="#0071E3" />
            <span>PRIVILEGED COMMUNICATIONS</span>
          </div>
          <h1 className="section-title">
            Direct Consultation with Senior Partners.
          </h1>
          <p className="section-subtitle">
            Initiate a preliminary evaluation regarding corporate investigations, transaction due diligence, or internal fraud exposure under privileged protocols.
          </p>
        </div>

        {/* Centered Form Card */}
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div 
            className="solid-card" 
            style={{ 
              padding: 'clamp(28px, 4vw, 44px)', 
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 16px 44px rgba(0, 0, 0, 0.06)'
            }}
          >
            {submittedData ? (
              <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                <div 
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '999px', 
                    background: 'rgba(52, 199, 89, 0.12)', 
                    color: '#34C759',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#1D1D1F', marginBottom: '10px' }}>
                  Inquiry Dispatched Successfully
                </h3>
                <p style={{ fontSize: '15px', color: '#6E6E73', lineHeight: 1.6, marginBottom: '20px' }}>
                  Thank you, <strong>{submittedData.name}</strong>. Reference ID: <code>{submittedData.refId}</code>. An engagement partner will reach out directly to your verified email under mutual non-disclosure.
                </p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setSubmittedData(null)}
                  style={{ margin: '0 auto' }}
                >
                  Submit Another Consultation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1D1D1F', margin: 0 }}>
                      Engagement Briefing Form
                    </h2>
                    <p style={{ fontSize: '13.5px', color: '#6E6E73', margin: '4px 0 0' }}>
                      All information submitted is protected by confidential non-disclosure privilege.
                    </p>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#0071E3', background: 'rgba(0, 113, 227, 0.08)', padding: '5px 12px', borderRadius: '999px', fontWeight: 600 }}>
                    <ShieldCheck size={14} />
                    <span>Strict NDA Protected</span>
                  </div>
                </div>

                <div className="form-row-2">
                  <div>
                    <label htmlFor="p-name" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      id="p-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <div style={{ color: '#FF3B30', fontSize: '12px', marginTop: '4px' }}>{errors.name}</div>}
                  </div>

                  <div>
                    <label htmlFor="p-email" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                      Corporate Email *
                    </label>
                    <input
                      id="p-email"
                      type="email"
                      className="form-input"
                      placeholder="r.sharma@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <div style={{ color: '#FF3B30', fontSize: '12px', marginTop: '4px' }}>{errors.email}</div>}
                  </div>
                </div>

                <div className="form-row-2">
                  <div>
                    <label htmlFor="p-phone" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                      Direct Telephone (Optional)
                    </label>
                    <input
                      id="p-phone"
                      type="tel"
                      className="form-input"
                      placeholder="+91 / International"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <div style={{ color: '#FF3B30', fontSize: '12px', marginTop: '4px' }}>{errors.phone}</div>}
                  </div>

                  <div>
                    <label htmlFor="p-company" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                      Organization Name
                    </label>
                    <input
                      id="p-company"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Apex Corporation"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="p-cat" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                    Primary Discipline of Inquiry *
                  </label>
                  <select
                    id="p-cat"
                    className="form-select"
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                  >
                    <optgroup label="Preventive Forensics">
                      <option value="Fraud Risk Assessment">Fraud Risk Assessment</option>
                      <option value="Whistleblowing Mechanism">Whistleblowing Mechanism</option>
                      <option value="Ombudsman Services">Ombudsman Services</option>
                      <option value="Employee Reference Check">Employee Reference Check</option>
                      <option value="Vendor Reference Check">Vendor Reference Check</option>
                      <option value="Matrimonial Reference Check">Matrimonial Reference Check</option>
                      <option value="Covert Market Intelligence">Covert Market Intelligence</option>
                      <option value="UPSI Management">Unpublished Price Sensitive Information (UPSI)</option>
                      <option value="Prevention of Insider Trading">Prevention of Insider Trading</option>
                    </optgroup>
                    <optgroup label="Detective Forensics">
                      <option value="Private Investigations">Private Investigations</option>
                      <option value="Digital Forensics">Digital Forensics</option>
                      <option value="Asset Tracing">Asset Tracing</option>
                      <option value="Counter Surveillance (TSCM)">Counter Surveillance (TSCM)</option>
                      <option value="Forensic Data Analysis">Forensic Data Analysis</option>
                      <option value="Document Verification">Document Verification</option>
                      <option value="Handwriting Verification">Handwriting Verification</option>
                      <option value="Signature Verification">Signature Verification</option>
                    </optgroup>
                    <optgroup label="General">
                      <option value="General Corporate Consultation">General Corporate Consultation</option>
                    </optgroup>
                  </select>
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label htmlFor="p-message" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1D1D1F', marginBottom: '6px' }}>
                    Engagement Scope / Situation Outline *
                  </label>
                  <textarea
                    id="p-message"
                    className="form-textarea"
                    rows={4}
                    placeholder="Outline relevant context, operational timelines, or target jurisdictions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <div style={{ color: '#FF3B30', fontSize: '12px', marginTop: '4px' }}>{errors.message}</div>}
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={formData.privacyConsent}
                      onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                      style={{ marginTop: '3px' }}
                    />
                    <span style={{ fontSize: '12.5px', color: '#6E6E73', lineHeight: 1.45 }}>
                      I agree to the processing of this inquiry under Herrlich Group's strict non-disclosure covenant and confirm I am authorized to represent this entity.
                    </span>
                  </label>
                  {errors.privacyConsent && <div style={{ color: '#FF3B30', fontSize: '12px', marginTop: '4px' }}>{errors.privacyConsent}</div>}
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                  style={{ width: '100%', padding: '15px', borderRadius: 'var(--radius-pill)', opacity: isSubmitting ? 0.75 : 1 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Transmitting Privileged Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Confidential Briefing</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
