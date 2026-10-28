export interface MethodologyStep {
  step: string;
  desc: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  category: 'Preventive Forensics' | 'Detective Forensics';
  tagline: string;
  quote: string;
  overview: string;
  helpsPoints: string[];
  approach: MethodologyStep[];
  commitment: string;
  iconName: string;
  shortDesc: string;
}

// -------------------------------------------------------------
// PREVENTIVE FORENSICS SERVICES
// -------------------------------------------------------------
export const preventiveServicesData: ServiceDetail[] = [
  {
    id: 'fraud-risk-assessment',
    title: 'Fraud Risk Assessment',
    category: 'Preventive Forensics',
    tagline: 'Prevention begins with identifying the risk.',
    quote: 'Know Your Risks. Strengthen Your Controls. Protect Your Business.',
    overview: 'Fraud Risk Assessment enables organisations to identify vulnerabilities, evaluate internal controls, and proactively address potential fraud threats before they escalate into significant financial, operational, or reputational losses.',
    shortDesc: 'Vulnerability mapping, internal control stress tests, and proactive fraud threat mitigation.',
    helpsPoints: [
      'Identify fraud risks and control weaknesses.',
      'Assess exposure to financial misconduct, corruption, and asset misappropriation.',
      'Strengthen internal controls and monitoring mechanisms.',
      'Detect red flags and suspicious transaction patterns.',
      'Enhance corporate governance and accountability.',
      'Protect business assets, reputation, and stakeholder confidence.',
      'Develop targeted fraud prevention and mitigation strategies.'
    ],
    approach: [
      { step: 'Understand', desc: 'Gain an understanding of the organisation, its operations, processes, and risk environment.' },
      { step: 'Identify', desc: 'Map relevant fraud scenarios, opportunities, incentives, and control vulnerabilities.' },
      { step: 'Assess', desc: 'Evaluate potential impact, likelihood, existing safeguards, and residual risk.' },
      { step: 'Analyse', desc: 'Review authorised records, process documentation, and available data for indicators of weaknesses or unusual activity.' },
      { step: 'Prioritise', desc: 'Develop a risk register or heat map to highlight significant exposures.' },
      { step: 'Recommend', desc: 'Propose proportionate and practical measures to strengthen controls and reduce vulnerabilities.' },
      { step: 'Report', desc: 'Present findings, risk ratings, and prioritised recommendations to the appropriate stakeholders.' },
      { step: 'Follow Up', desc: 'Support remediation tracking and reassessment where included in the engagement.' }
    ],
    commitment: 'Herrlich Group is committed to a professional, objective, confidential, and evidence-informed approach. Our focus is on helping organisations understand their fraud exposure, strengthen control environments, and make informed decisions about prevention, detection, and response. A risk indicator or control weakness is not, by itself, proof that fraud has occurred. Where specific allegations or suspicious findings arise, further examination or a separate investigation may be necessary.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'whistleblowing-mechanism',
    title: 'Whistleblowing Mechanism',
    category: 'Preventive Forensics',
    tagline: 'Speak Up. Prevent Misconduct. Protect Integrity.',
    quote: 'A Strong Speak-Up Culture Is the Foundation of a Strong Organisation.',
    overview: 'An effective whistleblowing mechanism provides a secure and confidential avenue for reporting suspected wrongdoing, enabling organisations to identify risks early and take appropriate action.',
    shortDesc: 'Confidential reporting channels, anti-retaliation protocols, and impartial triage.',
    helpsPoints: [
      'Detect suspected fraud, corruption, and unethical conduct.',
      'Encourage employees and stakeholders to speak up.',
      'Safeguard confidentiality and support protection against retaliation.',
      'Strengthen corporate governance and accountability.',
      'Enable timely, impartial assessment and investigation of concerns.',
      'Reduce potential financial, operational, and reputational risks.',
      'Identify control weaknesses and promote ethical business practices.'
    ],
    approach: [
      { step: 'Design', desc: 'Understand the organisation’s operations, risk profile, governance structure, and reporting requirements.' },
      { step: 'Establish', desc: 'Develop suitable reporting channels, policies, responsibilities, and escalation procedures.' },
      { step: 'Receive', desc: 'Ensure disclosures are recorded and handled through an appropriate, controlled process.' },
      { step: 'Assess', desc: 'Evaluate the reported concern objectively and identify the appropriate next steps.' },
      { step: 'Refer or Investigate', desc: 'Route the matter to an authorised and suitably independent function for further action.' },
      { step: 'Protect', desc: 'Apply appropriate confidentiality and anti-retaliation safeguards within the applicable framework.' },
      { step: 'Review', desc: 'Analyse case trends and recommend improvements to policies, controls, and organisational practices.' }
    ],
    commitment: 'We are committed to professional handling of sensitive disclosures, impartial assessment, responsible information management, and respect for individuals who raise concerns in good faith. We aim to help organisations establish whistleblowing arrangements that are credible, accessible, appropriately secure, and aligned with their governance and compliance obligations.',
    iconName: 'Megaphone'
  },
  {
    id: 'ombudsman-services',
    title: 'Ombudsman Services',
    category: 'Preventive Forensics',
    tagline: 'An Independent voice for a stronger organization',
    quote: 'An effective Ombudsman is not merely a complaint-handling mechanism — it is a cornerstone of a transparent, ethical, and accountable organisation.',
    overview: 'An independent Ombudsman mechanism strengthens corporate governance by providing a fair, impartial, and confidential avenue for raising and resolving concerns.',
    shortDesc: 'Independent grievance resolution, workplace ethics mediation, and accountability.',
    helpsPoints: [
      'Promote ethical business practices and transparency.',
      'Address grievances independently and objectively.',
      'Encourage reporting of misconduct and wrongdoing.',
      'Identify fraud, abuse of authority, and compliance concerns.',
      'Strengthen employee trust and management accountability.',
      'Mitigate operational, legal, and reputational risks.',
      'Drive continuous improvement in organisational policies and processes.'
    ],
    approach: [
      { step: 'Understand', desc: 'Clarify the concern, the parties involved, and the applicable mandate.' },
      { step: 'Listen', desc: 'Provide an opportunity for individuals to explain their concerns without prejudgment.' },
      { step: 'Assess', desc: 'Review available information objectively and identify suitable resolution pathways.' },
      { step: 'Facilitate or Refer', desc: 'Support informal resolution where appropriate or refer matters for formal investigation or other required action.' },
      { step: 'Document', desc: 'Maintain proportionate, secure records in accordance with the agreed process and applicable requirements.' },
      { step: 'Recommend', desc: 'Identify practical improvements and systemic issues where relevant.' }
    ],
    commitment: 'We are committed to discretion, impartiality, respect, procedural fairness, and responsible handling of sensitive information. Our services are designed to support a credible grievance-resolution framework while recognising the importance of applicable reporting obligations, safeguarding requirements, and formal investigative processes.',
    iconName: 'Scale'
  },
  {
    id: 'employee-reference-check',
    title: 'Employee Reference Check',
    category: 'Preventive Forensics',
    tagline: 'Trust Is Important. Verification Is Essential.',
    quote: 'Hire with Confidence. Build with Trust.',
    overview: 'Employee Reference Checks help organisations validate a candidate’s professional background, confirm relevant employment details, and make informed recruitment decisions.',
    shortDesc: 'Pre-employment validation, credential verification, and integrity screening.',
    helpsPoints: [
      'Verify employment history and professional experience.',
      'Identify material inconsistencies in candidate information.',
      'Support the assessment of professional conduct and reliability.',
      'Mitigate recruitment-related fraud and misrepresentation risks.',
      'Strengthen pre-employment due diligence.',
      'Protect sensitive business information and organisational interests.',
      'Promote fair, consistent, and accountable recruitment practices.'
    ],
    approach: [
      { step: 'Understand the Role', desc: 'Establish the position, relevant risks, and scope of the verification.' },
      { step: 'Obtain Consent & Authority', desc: 'Confirm that checks are properly authorised and that applicable privacy and employment requirements are addressed.' },
      { step: 'Verify Disclosed Information', desc: 'Contact appropriate employers, referees, educational institutions, or credentialing bodies.' },
      { step: 'Review Discrepancies', desc: 'Assess inconsistencies objectively and provide a reasonable opportunity for clarification where appropriate.' },
      { step: 'Document Findings', desc: 'Distinguish verified information from unconfirmed statements, pending responses, and unresolved discrepancies.' },
      { step: 'Prepare a Confidential Report', desc: 'Present the results clearly to authorised decision-makers, subject to agreed reporting arrangements.' }
    ],
    commitment: 'At Herrlich Group, we understand that employee reference checks must balance organisational risk management with fairness, confidentiality, and respect for candidates. We are committed to objective verification, responsible information handling, and clear reporting. Our services support—not replace—the employer’s recruitment decision. Findings are considered in context, and a discrepancy or unavailable reference is not, by itself, proof of dishonesty or misconduct.',
    iconName: 'UserCheck'
  },
  {
    id: 'vendor-reference-check',
    title: 'Vendor Reference Check',
    category: 'Preventive Forensics',
    tagline: 'Know Your Vendors. Protect Your Business.',
    quote: 'Verify Before You Engage. Build Trust Before You Commit.',
    overview: 'Vendor Reference Checks help organisations evaluate the credibility, reliability, and professional track record of prospective and existing suppliers before making critical business decisions.',
    shortDesc: 'Supplier credibility audits, conflict of interest checks, and procurement diligence.',
    helpsPoints: [
      'Validate vendor credibility and business reputation.',
      'Assess service quality and past performance.',
      'Identify potential red flags and material inconsistencies.',
      'Mitigate third-party fraud and misrepresentation risks.',
      'Identify relevant conflicts of interest.',
      'Strengthen procurement governance and transparency.',
      'Protect business continuity, commercial interests, and reputation.'
    ],
    approach: [
      { step: 'Understand the Requirement', desc: 'Establish the purpose of the check, the vendor’s role, and the relevant risk level.' },
      { step: 'Define the Scope', desc: 'Identify the credentials, references, and business information requiring verification.' },
      { step: 'Verify Relevant Information', desc: 'Use appropriate business records, authorised reference contacts, and legitimate sources.' },
      { step: 'Assess Findings', desc: 'Review discrepancies, reference feedback, and relevant risk indicators objectively.' },
      { step: 'Prepare a Report', desc: 'Document verified details, unresolved issues, limitations, and material observations.' },
      { step: 'Support Informed Decisions', desc: 'Provide practical findings to assist procurement, compliance, risk management, and management teams.' }
    ],
    commitment: 'At Herrlich Group, we recognise that reliable vendor relationships are fundamental to business continuity and corporate integrity. Our approach emphasises discretion, accuracy, fairness, confidentiality, and evidence-based reporting. All checks are conducted within an appropriately authorised and lawful scope, with due regard for applicable privacy requirements. Reference feedback and adverse information are assessed in context and are not treated as established facts without appropriate verification.',
    iconName: 'Building2'
  },
  {
    id: 'matrimonial-reference-check',
    title: 'Matrimonial Reference Check',
    category: 'Preventive Forensics',
    tagline: 'Because Trust Deserves Clarity.',
    quote: 'Make Informed Decisions. Protect Your Interests. Begin with Confidence.',
    overview: 'Marriage is one of life’s most important decisions. Make it with greater confidence through discreet and professional matrimonial due diligence. Herrlich Group helps you verify relevant information and identify potential red flags before making a lifelong commitment.',
    shortDesc: 'Discreet background verification, credential authentication, and personal due diligence.',
    helpsPoints: [
      'Identity and personal-detail verification.',
      'Education and employment verification.',
      'Professional and personal reference checks.',
      'Verification of relevant business and financial claims.',
      'Identification of material inconsistencies and potential misrepresentation.',
      'Discreet background enquiries through lawful and appropriate sources.',
      'Confidential reporting of verified findings.'
    ],
    approach: [
      { step: 'Initial Consultation', desc: 'Understand the client’s concerns and the specific details requiring verification.' },
      { step: 'Scope and Consent', desc: 'Define the agreed scope and establish the necessary consent, authority, and lawful basis for each check.' },
      { step: 'Information Verification', desc: 'Review appropriate documents, authorised records, and legitimate reference sources.' },
      { step: 'Discrepancy Assessment', desc: 'Identify inconsistencies objectively and allow for the possibility of errors, outdated information, or reasonable explanations.' },
      { step: 'Confidential Reporting', desc: 'Provide a factual report that distinguishes verified information from unconfirmed material.' },
      { step: 'Responsible Closure', desc: 'Explain relevant limitations and suggest appropriate follow-up verification where needed.' }
    ],
    commitment: 'At Herrlich Group, we understand the personal sensitivity of matrimonial enquiries. We are committed to discretion, fairness, confidentiality, and respect for the dignity of all individuals involved. Our services are limited to lawful and appropriately authorised verification. We do not guarantee personal compatibility or future relationship outcomes, and we do not rely on unauthorised access to private accounts, illegal surveillance, or intrusive methods. Findings are presented objectively, without treating unverified allegations as established facts.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'covert-market-intelligence',
    title: 'Covert Market Intelligence',
    category: 'Preventive Forensics',
    tagline: 'See Beyond the Obvious. Understand Your Market.',
    quote: 'Better Intelligence. Smarter Decisions. Stronger Business Protection.',
    overview: 'In a competitive business environment, reliable intelligence can provide a decisive advantage. Herrlich Group helps organisations gain discreet, actionable insights into market dynamics, competitive activity, and potential commercial risks.',
    shortDesc: 'Competitor positioning, distribution channel audits, and market risk analysis.',
    helpsPoints: [
      'Understand competitor positioning and market behaviour.',
      'Identify emerging business opportunities and market threats.',
      'Assess distribution channels and commercial practices.',
      'Identify potential brand abuse and unauthorised activities.',
      'Evaluate third-party and commercial risks.',
      'Strengthen market intelligence and strategic planning.',
      'Protect business interests and competitive positioning.'
    ],
    approach: [
      { step: 'Understand the Objective', desc: 'Define the business concern, intelligence requirements, and intended use of the findings.' },
      { step: 'Establish Scope & Authority', desc: 'Confirm the lawful basis, permitted methods, and boundaries of the assignment.' },
      { step: 'Gather Relevant Intelligence', desc: 'Use appropriate open sources, legitimate enquiries, and authorised field research.' },
      { step: 'Verify & Correlate Information', desc: 'Cross-check material findings where feasible and distinguish corroborated information from unverified leads.' },
      { step: 'Assess Risks & Implications', desc: 'Analyse the relevance of findings to the client’s commercial objectives and risk exposure.' },
      { step: 'Prepare an Intelligence Report', desc: 'Present key findings, supporting observations, limitations, and recommended follow-up actions.' }
    ],
    commitment: 'At Herrlich Group, we recognise that effective market intelligence must balance discretion with legal compliance, accuracy, and professional integrity. Our services are conducted within the agreed scope and applicable law. We do not rely on unlawful access to private accounts, unauthorised surveillance, bribery, impersonation to obtain protected information, or misappropriation of trade secrets. Intelligence findings are presented with appropriate context and limitations. Unverified information is not represented as established fact, and conclusions are based on the quality of the information available.',
    iconName: 'Compass'
  },
  {
    id: 'upsi-management',
    title: 'Unpublished Price Sensitive Information (UPSI)',
    category: 'Preventive Forensics',
    tagline: 'Protect Information. Prevent Misuse. Preserve Market Integrity.',
    quote: 'Confidentiality Is a Responsibility. Compliance Is a Commitment.',
    overview: 'Unpublished Price Sensitive Information can have significant implications for corporate governance, regulatory compliance, and investor confidence. Effective UPSI management helps organisations safeguard sensitive information and mitigate the risk of insider trading.',
    shortDesc: 'Information barrier audits, leak risk diagnostics, and compliance framework stress tests.',
    helpsPoints: [
      'Assess UPSI handling procedures and control frameworks.',
      'Identify potential information leakage risks.',
      'Review access controls and information-sharing practices.',
      'Assess insider trading risk indicators and control weaknesses.',
      'Strengthen compliance policies and employee awareness.',
      'Support appropriate documentation and governance processes.',
      'Protect corporate confidentiality and market integrity.'
    ],
    approach: [
      { step: 'Understand Information Environment', desc: 'Identify relevant business processes, information categories, and authorised stakeholders.' },
      { step: 'Assess Existing Safeguards', desc: 'Review applicable policies, access controls, information-sharing arrangements, and documentation procedures.' },
      { step: 'Identify Potential Vulnerabilities', desc: 'Examine relevant records and workflows to identify weaknesses or concerns requiring attention.' },
      { step: 'Support Authorised Investigations', desc: 'Help assess suspected leakage or mishandling using appropriately obtained evidence.' },
      { step: 'Document Findings', desc: 'Distinguish verified facts from indicators, assumptions, and matters requiring further investigation.' },
      { step: 'Recommend Improvements', desc: 'Provide practical recommendations for strengthening confidentiality, controls, and escalation procedures.' }
    ],
    commitment: 'At Herrlich Group, we help organisations protect sensitive corporate information through structured risk assessment, discreet and authorised investigative support, and practical control recommendations. Our focus is on confidentiality, responsible information handling, objective reporting, and stronger corporate governance.',
    iconName: 'Lock'
  },
  {
    id: 'prevention-of-insider-trading',
    title: 'Prevention of Insider Trading',
    category: 'Preventive Forensics',
    tagline: 'Fair Markets. Ethical Decisions. Protected Investors.',
    quote: 'Prevent Misuse. Promote Transparency. Preserve Market Integrity.',
    overview: 'Insider trading undermines investor confidence and compromises the integrity of securities markets. Strong compliance frameworks help organisations prevent the misuse of unpublished price-sensitive information and promote fair trading practices.',
    shortDesc: 'SEBI compliance advisory, insider trading policy audits, and governance controls.',
    helpsPoints: [
      'Assess insider trading risks and control weaknesses.',
      'Review UPSI access and information-handling procedures.',
      'Strengthen insider trading policies and internal controls.',
      'Identify potential information leakage risks.',
      'Support compliance with applicable SEBI regulations.',
      'Promote employee awareness and ethical conduct.',
      'Protect corporate reputation and investor confidence.'
    ],
    approach: [
      { step: 'Understand Risk Environment', desc: 'Identify relevant business processes, sensitive information, personnel, and potential exposure points.' },
      { step: 'Review Existing Controls', desc: 'Assess applicable policies, access restrictions, information-sharing procedures, and monitoring arrangements.' },
      { step: 'Identify Vulnerabilities', desc: 'Examine relevant records and processes to identify gaps, inconsistencies, or areas requiring improvement.' },
      { step: 'Support Investigation & Escalation', desc: 'Help authorised teams assess red flags objectively and document concerns appropriately.' },
      { step: 'Recommend Practical Safeguards', desc: 'Provide actionable recommendations to strengthen controls, training, confidentiality, and reporting procedures.' },
      { step: 'Support Ongoing Improvement', desc: 'Assist with periodic reviews and follow-up assessments as appropriate.' }
    ],
    commitment: 'At Herrlich Group, we help organisations strengthen preventive safeguards, address vulnerabilities, and promote responsible handling of sensitive information. Our focus is on confidentiality, objective assessment, practical recommendations, and appropriately authorised investigative support.',
    iconName: 'TrendingUp'
  }
];

// -------------------------------------------------------------
// DETECTIVE FORENSICS SERVICES
// -------------------------------------------------------------
export const detectiveServicesData: ServiceDetail[] = [
  {
    id: 'private-investigations',
    title: 'Private Investigations',
    category: 'Detective Forensics',
    tagline: 'When Facts Matter, Trust the Process.',
    quote: 'Discreet Investigations. Reliable Findings. Informed Decisions.',
    overview: 'Herrlich Group provides discreet and professional investigative services designed to help organisations and individuals uncover facts, verify information, assess risks, and address sensitive concerns.',
    shortDesc: 'Corporate inquiry, misconduct probes, financial fact-finding, and discreet intelligence.',
    helpsPoints: [
      'Corporate and employee investigations',
      'Fraud and Misconduct Investigations',
      'Employee Misconduct Investigations',
      'Background and reference checks',
      'Matrimonial and personal enquiries',
      'Vendor and business partner due diligence',
      'Asset tracing and financial enquiries',
      'Covert market intelligence',
      'Confidential information leakage investigations',
      'Digital and documentary analysis',
      'Evidence-based investigative reporting'
    ],
    approach: [
      { step: 'Initial Consultation & Scope', desc: 'Understand the client’s concerns, objectives, relevant background, and desired outcomes.' },
      { step: 'Investigation Planning', desc: 'Develop a structured investigation plan that defines the scope, appropriate methods, information requirements, and legal considerations.' },
      { step: 'Information Collection & Verification', desc: 'Gather relevant information from lawful sources and assess its reliability through appropriate verification methods.' },
      { step: 'Analysis & Corroboration', desc: 'Examine available information, identify inconsistencies, assess potential red flags, and distinguish verified facts from allegations or uncorroborated findings.' },
      { step: 'Findings & Reporting', desc: 'Prepare a structured report presenting the scope, methodology, relevant evidence, verified findings, limitations, and recommendations.' },
      { step: 'Advisory & Follow-up Support', desc: 'Where appropriate, assist clients in understanding findings and identifying suitable next steps, including further enquiries or referral to qualified legal professionals.' }
    ],
    commitment: 'Our approach combines structured enquiries, reliable information gathering, source verification, analytical assessment, and comprehensive reporting to help clients establish facts, identify potential risks, and make informed decisions. Every assignment is handled with professionalism, confidentiality, impartiality, and due regard for applicable laws and individual privacy.',
    iconName: 'Search'
  },
  {
    id: 'digital-forensics',
    title: 'Digital Forensics',
    category: 'Detective Forensics',
    tagline: 'Every Digital Trace Can Matter. Every Finding Must Be Verifiable.',
    quote: 'Digital Evidence. Investigative Clarity. Corporate Integrity.',
    overview: 'Herrlich Group provides professional digital forensic examination through different legitimate and licenced softwares and devices and investigative support to help uncover relevant evidence, establish timelines, and investigate suspected fraud, misconduct, and information leakage.',
    shortDesc: 'Device examination, communication analysis, deleted data recovery, and court-admissible artifacts.',
    helpsPoints: [
      'Computer, laptop, and storage media forensics',
      'Mobile device forensic examination',
      'Email and communication analysis',
      'Data breach and information leakage investigations',
      'Employee misconduct investigation support',
      'Fraud-related digital evidence analysis',
      'Deleted data recovery assessment',
      'Document metadata and authenticity analysis',
      'System log and timeline reconstruction',
      'Digital evidence preservation and reporting'
    ],
    approach: [
      { step: 'Consultation & Scoping', desc: 'Understand the incident, define objectives, establish authorised scope, and identify relevant devices, accounts, data sources, and legal considerations.' },
      { step: 'Evidence Identification & Preservation', desc: 'Identify relevant digital evidence and implement appropriate preservation measures to reduce the risk of alteration, loss, or contamination.' },
      { step: 'Forensic Acquisition', desc: 'Where authorised and technically appropriate, acquire forensic images or data exports using suitable methods and tools, documenting integrity checks.' },
      { step: 'Examination & Analysis', desc: 'Examine relevant files, metadata, system artefacts, communications, logs, and timelines within the agreed scope of the investigation.' },
      { step: 'Correlation & Interpretation', desc: 'Correlate findings across available sources, assess alternative explanations, and distinguish technical observations from unsupported assumptions.' },
      { step: 'Reporting & Presentation', desc: 'Prepare a structured report documenting scope, methodology, relevant findings, limitations, and supporting artefacts for legal counsel and management.' }
    ],
    commitment: 'Our approach emphasises forensic integrity, documented procedures, confidentiality, and the preservation of evidence in a manner that supports reliable analysis and potential legal or disciplinary proceedings.',
    iconName: 'Cpu'
  },
  {
    id: 'asset-tracing',
    title: 'Asset Tracing',
    category: 'Detective Forensics',
    tagline: 'Follow the Evidence. Identify the Assets. Protect Your Interests.',
    quote: 'Knowledge Creates Clarity. Evidence Supports Recovery.',
    overview: 'Herrlich Group provides discreet and professional asset tracing services to help identify potential assets, investigate ownership connections, and develop leads in fraud, debt recovery, and commercial disputes.',
    shortDesc: 'Property research, ultimate beneficial ownership mapping, and cross-border recovery leads.',
    helpsPoints: [
      'Individual and corporate asset identification',
      'Property and real estate ownership research',
      'Corporate ownership and related-entity analysis',
      'Financial interest and investment enquiries',
      'Suspected asset diversion investigations',
      'Debtor and recovery-related asset tracing',
      'Business interest and commercial relationship analysis',
      'Cross-border asset research, where lawful',
      'Documentary and financial record analysis',
      'Confidential investigative reporting'
    ],
    approach: [
      { step: 'Scope Definition', desc: 'Understand the client’s objectives, relevant parties, background information, and the purpose of the asset tracing assignment.' },
      { step: 'Document Review', desc: 'Examine available records and documentation to establish initial leads, identify relevant entities, and define areas for further research.' },
      { step: 'Lawful Information Gathering', desc: 'Conduct structured research using appropriate public records, corporate databases, authorised sources, and other legally accessible information.' },
      { step: 'Ownership & Relationship Analysis', desc: 'Assess available information to identify potential asset holdings, corporate relationships, ownership links, and relevant transaction patterns.' },
      { step: 'Verification & Corroboration', desc: 'Cross-check material findings against reliable sources wherever possible, distinguishing verified information from unconfirmed leads.' },
      { step: 'Reporting & Advisory Support', desc: 'Provide a confidential report summarising findings, supporting information, limitations, and potential next steps for legal advisers.' }
    ],
    commitment: 'Our approach combines lawful information gathering, documentary analysis, corporate intelligence, public-record research, and financial fact-finding to deliver structured, evidence-based findings.',
    iconName: 'Coins'
  },
  {
    id: 'counter-surveillance',
    title: 'Counter Surveillance (TSCM)',
    category: 'Detective Forensics',
    tagline: 'Your Privacy. Your Information. Your Security.',
    quote: 'Protect Your Privacy. Secure Your Environment. Safeguard What Matters.',
    overview: 'Herrlich Group provides discreet counter surveillance assessments to help organisations and individuals identify potential privacy vulnerabilities and strengthen protection against unauthorised monitoring.',
    shortDesc: 'Boardroom security sweeps, electronic bug sweeps, and confidential environment audits.',
    helpsPoints: [
      'Technical surveillance risk assessments',
      'Office and boardroom security inspections',
      'Residential privacy assessments',
      'Executive security and confidentiality reviews',
      'Authorised wireless and electronic security assessments',
      'Physical access vulnerability reviews',
      'Confidential meeting security assessments',
      'Suspected surveillance incident evaluations',
      'Privacy protection recommendations',
      'Confidential security reporting'
    ],
    approach: [
      { step: 'Consultation & Risk Profiling', desc: 'Understand the client’s concerns, the environment involved, relevant threats, and the objectives of the assessment.' },
      { step: 'Scope Definition & Authorisation', desc: 'Establish the areas, devices, and systems that may be examined, ensuring appropriate permission and compliance.' },
      { step: 'Physical & Technical Assessment', desc: 'Conduct suitable inspections and authorised technical checks to assess identified surveillance and privacy risks.' },
      { step: 'Evaluation of Findings', desc: 'Examine observations and technical indicators, distinguish verified concerns from inconclusive findings, and identify vulnerabilities.' },
      { step: 'Recommendations & Mitigation', desc: 'Provide proportionate recommendations to strengthen privacy, physical security, and information protection.' },
      { step: 'Reporting & Follow-Up', desc: 'Deliver a confidential report and, where appropriate, recommend additional specialist assessment or corrective measures.' }
    ],
    commitment: 'Our approach focuses on lawful security assessments, physical environment inspections, authorised technical examinations, and practical recommendations designed to help clients better understand and manage potential surveillance threats.',
    iconName: 'Scan'
  },
  {
    id: 'forensic-data-analysis',
    title: 'Forensic Data Analysis',
    category: 'Detective Forensics',
    tagline: 'Turning Complex Data into Clear, Actionable Evidence',
    quote: 'Identify Anomalies. Uncover Connections. Strengthen Corporate Integrity.',
    overview: 'Herrlich Group helps organisations identify suspicious patterns, investigate financial irregularities, correlate complex datasets, uncover hidden connections, and develop evidence-informed insights.',
    shortDesc: 'Financial pattern diagnostics, Benford’s law statistical review, and transactional anomalies.',
    helpsPoints: [
      'Fraud and Financial Data Analysis',
      'Transaction and Payment Reviews',
      'Employee and Vendor Data Analysis',
      'Benford’s Law and Statistical Analysis',
      'Email and Communication Pattern Analysis',
      'Anomaly and Pattern Detection',
      'Trend and Pattern Identification',
      'Data Correlation and Link Analysis',
      'Investigation Timeline Reconstruction',
      'Evidence-Based Reporting'
    ],
    approach: [
      { step: 'Objective & Scope', desc: 'Understand the investigative objective and define the authorised scope.' },
      { step: 'Data Quality Assessment', desc: 'Evaluate dataset integrity, completeness, formats, and extraction custody.' },
      { step: 'Analytical Execution', desc: 'Apply statistical analysis, Benford’s Law, filtering, pattern mapping, and transactional correlation.' },
      { step: 'Anomaly Validation', desc: 'Validate significant deviations, flags, and anomalies against operational source documents.' },
      { step: 'Evidence Corroboration', desc: 'Distinguish identified facts and analytical indicators from matters requiring further investigation.' },
      { step: 'Executive Presentation', desc: 'Deliver an evidence-informed report with visual relationship maps, timelines, and prioritized findings.' }
    ],
    commitment: 'At Herrlich Group, we help organisations make sense of complex information through disciplined analysis, investigative insight, and clear reporting—supporting the pursuit of facts, the protection of corporate interests, and stronger organisational integrity. An anomaly alone does not establish fraud or misconduct.',
    iconName: 'BarChart3'
  },
  {
    id: 'document-verification',
    title: 'Document Verification',
    category: 'Detective Forensics',
    tagline: 'Examining Documents. Protecting Business Integrity.',
    quote: 'Identify Irregularities. Strengthen Due Diligence. Protect Corporate Interests.',
    overview: 'Herrlich Group helps organisations examine questioned documents, identify potential alterations, verify relevant records, and investigate documentary inconsistencies that may indicate fraud or misrepresentation.',
    shortDesc: 'Tampering detection, alteration review, and commercial document authenticity audits.',
    helpsPoints: [
      'Document Authenticity Assessment',
      'Alteration and Tampering Detection',
      'Handwriting and Signature Review',
      'Corporate and Commercial Document Verification',
      'Digital Document Examination',
      'Financial and Transactional Record Review',
      'Documentary Evidence Reporting'
    ],
    approach: [
      { step: 'Initial Assessment', desc: 'Understand the concern, the document’s purpose, and the questions requiring examination.' },
      { step: 'Scope and Authorisation', desc: 'Confirm lawful access, appropriate authority, and the scope of review.' },
      { step: 'Document Preservation', desc: 'Record the condition of available material and preserve originals or forensic copies where appropriate.' },
      { step: 'Systematic Examination', desc: 'Review relevant physical or digital features, compare supporting records, and identify inconsistencies.' },
      { step: 'Validation & Specialist Referral', desc: 'Assess significant observations and refer technical or laboratory questions to suitably qualified specialists when needed.' },
      { step: 'Reporting', desc: 'Present findings clearly, distinguishing observed facts from indicators, limitations, and matters requiring further verification.' }
    ],
    commitment: 'At Herrlich Group, we understand that the integrity of a document can have significant financial, operational, commercial, and legal implications. We are committed to confidentiality, careful examination, transparent reporting, and responsible investigative support. Conclusions depend on the available material, examination methods, and specialist expertise required.',
    iconName: 'FileText'
  },
  {
    id: 'handwriting-verification',
    title: 'Handwriting Verification',
    category: 'Detective Forensics',
    tagline: 'Examining Handwriting. Supporting Document Integrity.',
    quote: 'Examining Details. Clarifying Doubts. Supporting Document Integrity.',
    overview: 'Herrlich Group provides handwriting verification services to help organisations examine questioned handwriting, compare reference samples, identify relevant discrepancies, and support document-related investigations.',
    shortDesc: 'Sample comparison, questioned handwriting examination, and authorship assessment.',
    helpsPoints: [
      'Handwriting Sample Comparison',
      'Questioned Document Examination',
      'Authorship Assessment',
      'Disputed Handwriting Review',
      'Corporate Document Investigations',
      'Structured Findings and Reporting'
    ],
    approach: [
      { step: 'Case Understanding', desc: 'Review the disputed context, timeline, and questions surrounding the questioned handwriting.' },
      { step: 'Material Review', desc: 'Review the questioned specimen and evaluate its physical or digital clarity.' },
      { step: 'Reference Specimen Assessment', desc: 'Gather and assess suitable contemporaneous reference samples for comparison.' },
      { step: 'Characteristic Comparison', desc: 'Compare slant, pressure, spacing, letter formations, baseline alignment, and unique traits.' },
      { step: 'Observation Documentation', desc: 'Record specific discrepancies, consistencies, and variations with scientific rigor.' },
      { step: 'Findings Report', desc: 'Prepare a structured report that explains the findings, methodologies, and technical limitations.' }
    ],
    commitment: 'At Herrlich Group, we recognise the importance of reliable document review in protecting business interests and supporting investigative integrity. Our focus is on careful examination, objective observations, confidentiality, and clear reporting to help clients make informed decisions. Where the matter requires formal forensic examination or expert opinion, the work is undertaken or reviewed by an appropriately qualified forensic document examiner.',
    iconName: 'PenTool'
  },
  {
    id: 'signature-verification',
    title: 'Signature Verification',
    category: 'Detective Forensics',
    tagline: 'Authenticating Signatures. Protecting Business Integrity.',
    quote: 'Examining Signatures. Identifying Discrepancies. Supporting Document Integrity.',
    overview: 'Herrlich Group assists organisations in examining questioned signatures, comparing reference specimens, identifying relevant discrepancies, and supporting investigations into suspected signature-related fraud.',
    shortDesc: 'Questioned signature analysis, suspected forgery assessment, and forensic verification.',
    helpsPoints: [
      'Questioned Signature Examination',
      'Signature Comparison',
      'Suspected Forgery Assessment',
      'Corporate Document Verification',
      'Signature-Related Fraud Investigations',
      'Forensic Reporting and Documentation'
    ],
    approach: [
      { step: 'Dispute Understanding', desc: 'Understand the nature of the dispute, commercial context, and contested execution.' },
      { step: 'Questioned Signature Review', desc: 'Examine stroke dynamics, tremors, hesitations, pen lifts, and line quality of questioned signatures.' },
      { step: 'Reference Specimen Sampling', desc: 'Assess suitable, verifiable reference specimens spanning contemporaneous execution dates.' },
      { step: 'Characteristic Comparison', desc: 'Compare proportional traits, entry/exit strokes, rhythm, embellishments, and velocity.' },
      { step: 'Observation Documentation', desc: 'Document characteristics, natural variation thresholds, and identified discrepancies.' },
      { step: 'Forensic Reporting', desc: 'Deliver an objective report detailing observations, comparison outcomes, and evidentiary limitations.' }
    ],
    commitment: 'At Herrlich Group, we understand that the authenticity of a signature can have significant financial, commercial, and legal implications. Our focus is on careful examination, confidentiality, objective reporting, and responsible investigative support to help clients address signature-related concerns.',
    iconName: 'CheckCircle2'
  }
];

// Unified list of all services
export const allServicesData: ServiceDetail[] = [
  ...preventiveServicesData,
  ...detectiveServicesData
];

// Legacy compatibility helper
export const servicesData = allServicesData.map(s => ({
  id: s.id,
  title: s.title,
  category: s.category,
  shortDesc: s.shortDesc,
  fullDesc: s.overview,
  iconName: s.iconName,
  deliverables: s.helpsPoints.slice(0, 4),
  keyCapabilities: s.approach.map(a => `${a.step}: ${a.desc}`).slice(0, 4)
}));

export type ServiceItem = typeof servicesData[0];
