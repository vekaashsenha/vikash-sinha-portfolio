import Link from "next/link";

const summary = "B2B marketing leader with 12+ years of experience across enterprise marketing, SaaS-style growth, demand generation, GTM strategy, product marketing support, brand building, sales enablement, CRM-led marketing, content strategy, digital campaigns, events, and marketing team leadership across India, US, and international markets. Experienced in building structured marketing engines for sales-led and enterprise-focused businesses, supporting pipeline growth, brand visibility, customer acquisition, and revenue outcomes. Strong background in working closely with founders, business leaders, sales teams, agencies, vendors, and cross-functional stakeholders to align marketing strategy with business growth. Relevant exposure to enterprise software, HRMS, HR solutions, staffing, workforce solutions, training, professional services, and enterprise service buyers through YOMA Business Solutions under BYLD Group, NCheng LLP, and International Travel House. Skilled at translating complex offerings into clear positioning, customer-facing messaging, sales collateral, campaigns, and demand generation programs. AI-forward marketer using ChatGPT, Codex, Canva AI, GitHub workflows, AEO, GEO, AI-assisted content operations, research workflows, and automation to improve marketing speed, content quality, campaign execution, and productivity";

const experience = [
  { role: "Marketing Manager", company: "International Travel House Ltd. - ITC Group", location: "Delhi NCR", dates: "04/2025 - Present", bullets: [
    "Lead enterprise marketing initiatives across Corporate Travel, Corporate Mobility, Employee Transportation, MICE, Leisure, and Air Charter business verticals, supporting brand visibility, customer acquisition, demand generation, sales enablement, and business growth",
    "Drive integrated marketing programs contributing approximately ₹24 Cr in business revenue through campaign planning, CRM-led targeting, customer communication, sales alignment, demand generation, and performance tracking",
    "Partner with business leaders, sales teams, operations, technology, and internal stakeholders to align marketing priorities with revenue goals, customer needs, account opportunities, and market priorities",
    "Lead CRM transformation and pipeline visibility initiatives to improve lead tracking, customer engagement, sales handoff, performance reporting, forecasting, and marketing accountability",
    "Support GTM planning and customer journey development for new mobility-led offerings, including B2C mobility launch planning, positioning, website flow, pricing communication, lead capture, and acquisition strategy",
    "Develop market-facing messaging, campaign assets, sales enablement materials, landing page inputs, presentations, email campaigns, customer-facing content, and business development collateral",
    "Manage digital marketing programs across Google Ads, LinkedIn, Meta, SEO, email marketing, content, landing pages, events, customer engagement, and campaign performance reporting",
    "Use CRM dashboards, campaign analytics, funnel metrics, and marketing data to evaluate lead quality, improve conversion, identify gaps, and support commercial decision-making",
    "Apply AI-assisted workflows for campaign planning, research, content operations, competitive analysis, customer communication, automation, and marketing productivity",
  ] },
  { role: "Assistant Manager - Demand Generation & Revenue Marketing", company: "NCheng LLP - US Market", location: "Remote", dates: "12/2023 - 02/2025", bullets: [
    "Led US-focused B2B demand generation and revenue marketing initiatives for a New York-based CPA and advisory firm targeting business, founder-led, and enterprise audiences",
    "Generated $5.9M+ qualified sales pipeline and influenced $5.6M revenue through integrated campaigns, CRM-led nurturing, content-led engagement, landing pages, webinars, email marketing, SEO, and paid campaigns",
    "Developed campaign strategies across Google Ads, LinkedIn, SEO, email marketing, webinars, landing pages, content marketing, CRM workflows, and sales enablement",
    "Built automated lead nurturing programs and CRM-driven email sequences to improve prospect engagement, sales readiness, follow-up efficiency, lead quality, and opportunity conversion",
    "Created customer-facing messaging, landing page copy, campaign communication, case-study style content, thought leadership content, email sequences, and sales enablement assets to support business development conversations",
    "Collaborated with leadership and business development teams to improve positioning, lead quality, customer acquisition, campaign performance, sales handoff, and revenue contribution",
    "Used campaign performance data, CRM insights, funnel metrics, and reporting dashboards to improve audience targeting, conversion quality, pipeline visibility, and marketing ROI",
    "Supported remote collaboration across India and US timelines with clear reporting, campaign ownership, stakeholder communication, and performance accountability",
  ] },
  { role: "Brand & Marketing Manager", company: "BYLD Group / YOMA Business Solutions", location: "Delhi NCR", dates: "02/2021 - 12/2023", bullets: [
    "Led B2B marketing, demand generation, GTM planning, product marketing support, brand campaigns, webinars, events, content marketing, sales enablement, and customer engagement across HR solutions, HRMS-related services, staffing, leadership development, coaching, assessment, and professional learning businesses",
    "Contributed ₹12 Cr+ business growth and 12X pipeline expansion by aligning marketing programs with sales priorities, enterprise buyer needs, market opportunities, and revenue objectives",
    "Worked on HRMS, HR solutions, staffing, workforce, and people-management related services through YOMA Business Solutions, supporting enterprise buyer awareness, campaign messaging, lead generation, and sales enablement",
    "Launched and scaled two B2B offerings through positioning, GTM strategy, value proposition development, content marketing, webinars, digital campaigns, field marketing, and sales enablement",
    "Developed marketing assets including case studies, whitepapers, blogs, email campaigns, landing pages, webinars, pitch decks, sales decks, presentations, event collaterals, and customer-facing content",
    "Planned and executed enterprise-focused webinars, leadership forums, customer education programs, corporate events, exhibitions, thought leadership campaigns, and content-led demand generation initiatives",
    "Managed campaigns across LinkedIn Ads, Google Ads, SEO, email marketing, webinars, exhibitions, corporate events, partner marketing, and content-led demand generation",
    "Built and managed a team of 15 marketing professionals across content, digital marketing, design, events, and campaign execution",
    "Partnered with sales and leadership teams to improve lead generation, audience engagement, conversion support, brand visibility, campaign performance, and marketing ROI",
  ] },
  { role: "Marketing Executive", company: "Oyster Bath Pvt. Ltd", location: "Delhi NCR", dates: "03/2019 - 10/2019", bullets: [
    "Managed brand visibility, digital marketing, dealer engagement, retail campaigns, customer communication, and channel marketing initiatives",
    "Supported sales enablement, market visibility, campaign execution, customer engagement, dealer communication, and local market activation programs",
  ] },
  { role: "Marketing Executive", company: "ESP Events Pvt. Ltd", location: "Delhi NCR", dates: "06/2014 - 02/2019", bullets: [
    "Managed integrated marketing campaigns, corporate events, exhibitions, brand activations, BTL programs, customer engagement initiatives, and field marketing programs for enterprise clients",
    "Supported and executed event programs for major enterprise brands including HDFC, GSK Pharma, Hero Honda, Sony, TVS, Tetra Pak, and other corporate clients",
    "Coordinated campaign execution including planning, client communication, vendor management, budgeting, branding, logistics, venue coordination, on-ground execution, and post-event reporting",
    "Built strong experience in enterprise stakeholder management, event-led marketing, field marketing, customer engagement, brand visibility, agency coordination, and execution planning",
  ] },
];

const skillGroups = [
  ["Core Competencies:", "B2B SaaS Marketing, Enterprise Software Marketing, ERP-Style Buyer Marketing, GTM Strategy, Product Marketing, Demand Generation, Pipeline Growth, Revenue Marketing, Brand Strategy, Digital Marketing, Content Marketing, Sales Enablement, Account-Based Marketing, ABM-Style Campaigns, CRM-Led Marketing, Marketing Automation, Lead Generation, Lead Nurturing, Website & Landing Pages, SEO, SEM, Google Ads, LinkedIn Ads, Email Marketing, Webinars, Events, Customer Engagement, Partner Marketing, Agency Management, Vendor Management, Budget Management, Team Leadership, Marketing Analytics, AI-Powered Marketing"],
  ["CRM & Marketing Automation:", "Salesforce, HubSpot, Marketo, Odoo CRM, LeadSquared, Zoho CRM, Email Automation, Lead Nurturing, CRM Workflows"],
  ["Analytics & Reporting:", "GA4, Google Tag Manager, Looker Studio, Power BI, CRM Dashboards, Campaign Analytics, Funnel Reporting, Pipeline Reporting, Performance Dashboards"],
  ["Digital & Demand Generation:", "Google Ads, LinkedIn Ads, Meta Ads, SEO, SEM, Email Marketing, Landing Pages, CRO, Webinars, Content Marketing, Social Media Marketing, LinkedIn Marketing, Website Content"],
  ["Events & Brand Marketing:", "Corporate Events, Webinars, Industry Events, Exhibitions, Customer Engagement Programs, BTL Campaigns, Field Marketing, Event Collaterals, Vendor Management, Agency Coordination, On-Ground Execution"],
  ["AI & Productivity:", "ChatGPT, Codex, Canva AI, GitHub Workflows, AEO, GEO, AI-Assisted Content Operations, AI Research Workflows, Prompt Engineering, Agentic AI Systems"],
];

const achievements = [
  ["Generated $5.9M qualified sales pipeline and influenced $5.6M revenue", "Through US-focused B2B demand generation, CRM-led marketing, content campaigns, landing pages, webinars, email marketing, and sales enablement at NCheng LLP"],
  ["Contributed approximately ₹24 Cr in business revenue", "Through integrated marketing, CRM transformation, sales alignment, customer engagement, demand generation, and enterprise marketing initiatives at International Travel House"],
  ["Contributed ₹12 Cr+ business growth and 12X pipeline expansion", "Through GTM planning, B2B campaigns, product launch support, webinars, events, content marketing, sales enablement, and demand generation at BYLD Group / YOMA Business Solutions"],
  ["Worked on HRMS, HR solutions, staffing, workforce, learning, and people-management related services", "Through YOMA Business Solutions under BYLD Group, supporting enterprise buyer engagement and demand generation"],
  ["Launched and scaled B2B offerings", "Through positioning, GTM strategy, value proposition development, content marketing, digital campaigns, webinars, field marketing, and sales enablement"],
  ["Built and managed marketing teams of 15+ professionals", "Across content, digital marketing, design, events, campaign execution, and marketing operations"],
  ["Developed sales enablement assets", "Including pitch decks, case studies, whitepapers, blogs, landing pages, webinars, presentations, email campaigns, and customer-facing communication"],
];

const atsKeywords = "Head of Marketing | B2B SaaS Marketing | Enterprise SaaS Marketing | Enterprise Software Marketing | ERP Marketing | Product Marketing | GTM Strategy | Demand Generation | Pipeline Growth | Revenue Marketing | Brand Strategy | Digital Marketing | Content Marketing | Event Marketing | Sales Enablement | Account-Based Marketing | ABM | CRM Marketing | Marketing Automation | Lead Generation | Lead Nurturing | SaaS Buyer Journey | Enterprise Buyer Journey | Product Positioning | Market Positioning | Customer Acquisition | Campaign Strategy | Website Marketing | SEO | SEM | Google Ads | LinkedIn Ads | Email Marketing | Webinars | Customer Engagement | Industry Events | Marketing Budget | Team Leadership | Agency Management | Vendor Management | Sales Alignment | Business Growth | AI-Powered Marketing | HRMS Marketing | HR Solutions Marketing | Workforce Solutions | Enterprise Buyers | Founder-Led Marketing | Product Company Marketing";

export default function AboutPage() {
  return <main>
    <header className="site-header"><Link className="wordmark" href="/" aria-label="Vikash Sinha home">VIKASH<br />SINHA</Link><nav aria-label="Primary navigation"><Link href="/#impact">Impact</Link><Link href="/about" aria-current="page">About</Link><Link href="/#blog">Blog</Link><a className="contact-link" href="https://www.linkedin.com/in/vikash-senha/" target="_blank" rel="noreferrer">Contact</a></nav></header>
    <article className="resume-page">
      <section className="resume-masthead"><div><h1>Vikash Sinha</h1><p>Head of Marketing</p></div><a className="resume-download resume-download--primary" href="/Vikash_Sinha_Resume.pdf" target="_blank" rel="noreferrer">Download resume <span>↗</span></a></section>
      <p className="resume-contact">vikash@marketingbeyondmarketing.com <span>•</span> linkedin.com/in/vikash-senha <span>•</span> github.com/vekaashsenha <span>•</span> Delhi NCR, India</p>
      <section className="resume-section"><h2>SUMMARY</h2><p className="resume-summary">{summary}</p></section>
      <section className="resume-section"><h2>EXPERIENCE</h2><div className="experience-list">{experience.map((item) => <article className="experience-item" key={`${item.company}-${item.dates}`}><div className="experience-heading"><div><h3>{item.role}</h3><p>{item.company}</p></div><div><span>{item.location}</span><span>{item.dates}</span></div></div><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div></section>
      <section className="resume-section"><h2>EDUCATION</h2><div className="education-list"><p>Accelerated General Management Programme (AGMP)<br /><strong>Indian Institute of Management Ahmedabad</strong></p><p>Executive Programme - Digital Marketing &amp; Business Transformation<br /><strong>Indian Institute of Management Ahmedabad</strong></p><p>MBA - Marketing<br /><strong>Sabarmati University</strong></p></div></section>
      <section className="resume-section"><h2>SKILLS</h2><div className="skills-list">{skillGroups.map(([title, body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div></section>
      <section className="resume-section"><h2>CERTIFICATIONS</h2><p className="resume-summary">XLRI - Product Management Certification</p></section>
      <section className="resume-section"><h2>KEY ACHIEVEMENTS</h2><div className="achievement-grid">{achievements.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className="resume-section resume-section--last"><h2>ATS KEYWORDS</h2><p className="ats-keywords">{atsKeywords}</p></section>
    </article>
    <footer><strong>VIKASH SINHA</strong><span>Delhi NCR · Open to hybrid or remote leadership roles</span><Link href="/">Home ↗</Link></footer>
  </main>;
}
