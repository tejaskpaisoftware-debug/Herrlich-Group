export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  description?: string;
  icon?: string;
}

export const mainNavItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Preventive Forensics', href: '/preventive-forensics' },
  { name: 'Detective Forensics', href: '/detective-forensics' },
  { name: 'Industries', href: '/industries' },
  { name: 'Contact', href: '/contact' },
];

export const preventiveDropdownItems: NavItem[] = [
  {
    name: 'Fraud Risk Assessment',
    href: '/preventive-forensics#fraud-risk-assessment',
    description: 'Vulnerability mapping, internal controls, and prevention strategies.',
    icon: 'ShieldAlert',
  },
  {
    name: 'Whistleblowing Mechanism',
    href: '/preventive-forensics#whistleblowing-mechanism',
    description: 'Confidential reporting channels and anti-retaliation frameworks.',
    icon: 'Megaphone',
  },
  {
    name: 'Ombudsman Services',
    href: '/preventive-forensics#ombudsman-services',
    description: 'Independent, impartial grievance resolution and governance.',
    icon: 'Scale',
  },
  {
    name: 'Employee Reference Check',
    href: '/preventive-forensics#employee-reference-check',
    description: 'Pre-employment validation, credentials, and reliability checks.',
    icon: 'UserCheck',
  },
  {
    name: 'Vendor Reference Check',
    href: '/preventive-forensics#vendor-reference-check',
    description: 'Third-party credibility, past performance, and conflict checks.',
    icon: 'Building2',
  },
  {
    name: 'Matrimonial Reference Check',
    href: '/preventive-forensics#matrimonial-reference-check',
    description: 'Discreet pre-marital due diligence and background verification.',
    icon: 'HeartHandshake',
  },
  {
    name: 'Covert Market Intelligence',
    href: '/preventive-forensics#covert-market-intelligence',
    description: 'Competitor positioning, distribution, and commercial risk analysis.',
    icon: 'Compass',
  },
  {
    name: 'UPSI Management',
    href: '/preventive-forensics#upsi-management',
    description: 'Safeguard price-sensitive data and prevent information leakage.',
    icon: 'Lock',
  },
  {
    name: 'Prevention of Insider Trading',
    href: '/preventive-forensics#prevention-of-insider-trading',
    description: 'Regulatory SEBI compliance, policy controls, and ethics frameworks.',
    icon: 'TrendingUp',
  },
];

export const detectiveDropdownItems: NavItem[] = [
  {
    name: 'Private Investigations',
    href: '/detective-forensics#private-investigations',
    description: 'Corporate misconduct, evidence assembly, and confidential inquiry.',
    icon: 'Search',
  },
  {
    name: 'Digital Forensics',
    href: '/detective-forensics#digital-forensics',
    description: 'Device analysis, artifact preservation, and data breach investigations.',
    icon: 'Cpu',
  },
  {
    name: 'Asset Tracing',
    href: '/detective-forensics#asset-tracing',
    description: 'Asset identification, entity mapping, and recovery intelligence.',
    icon: 'Coins',
  },
  {
    name: 'Counter Surveillance (TSCM)',
    href: '/detective-forensics#counter-surveillance',
    description: 'Technical surveillance sweeps, bug detection, and privacy audits.',
    icon: 'Scan',
  },
  {
    name: 'Forensic Data Analysis',
    href: '/detective-forensics#forensic-data-analysis',
    description: 'Benford’s law, pattern correlation, and transactional analytics.',
    icon: 'BarChart3',
  },
  {
    name: 'Document Verification',
    href: '/detective-forensics#document-verification',
    description: 'Tampering detection, commercial record audits, and authenticity.',
    icon: 'FileText',
  },
  {
    name: 'Handwriting Verification',
    href: '/detective-forensics#handwriting-verification',
    description: 'Questioned handwriting examination and authorship assessment.',
    icon: 'PenTool',
  },
  {
    name: 'Signature Verification',
    href: '/detective-forensics#signature-verification',
    description: 'Questioned signature analysis, forgery review, and comparison.',
    icon: 'CheckCircle2',
  },
];

// Unified legacy alias
export const servicesDropdownItems: NavItem[] = [
  ...preventiveDropdownItems,
  ...detectiveDropdownItems,
];
