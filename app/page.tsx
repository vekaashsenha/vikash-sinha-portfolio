import Link from "next/link";

const impact = [
  { value: "₹100 Cr+", label: "Revenue impact across 12+ years", tone: "coral" },
  { value: "12×", label: "Pipeline growth", tone: "paper" },
  { value: "5.6×", label: "Marketing return", tone: "blue" },
  { value: "17", label: "Person team built", tone: "paper" },
];

const stories = [
  { number: "01", title: "₹24 Cr in the last 12 months.", text: "A recent-year result within a wider ₹100 Cr+ career revenue impact—not the total number for 12+ years of work." },
  { number: "02", title: "Built the system, then the team.", text: "Hired, trained and led a 17-person marketing team from the ground up, with a clear operating rhythm behind it." },
  { number: "03", title: "Made demand commercial.", text: "Built buyer-led acquisition, nurture and sales-alignment systems around pipeline quality—not just lead volume." },
];

export default function Home() {
  return <main>
    <header className="site-header"><a className="wordmark" href="#top" aria-label="Vikash Sinha home">VIKASH<br />SINHA</a><nav aria-label="Primary navigation"><a href="#impact">Impact</a><Link href="/about">About</Link><a href="#blog">Blog</a><a className="contact-link" href="#contact">Contact</a></nav></header>
    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">B2B MARKETING LEADER · GROWTH, BRAND &amp; REVENUE</p><h1>Make<br />business<br />move.</h1><p className="hero-intro">I build B2B marketing that is hard to ignore, easy to understand and built to create commercial outcomes.</p><p className="hero-proof"><strong>₹100 Cr+ revenue impact</strong> over 12+ years. <strong>₹24 Cr</strong> delivered in the last 12 months.</p><a className="button" href="#impact">View my impact <span>↘</span></a></div><div className="hero-art"><p>Marketing beyond<br />the campaign.</p><div className="portrait-orbit"><img src="/vikash-hero-portrait.jpg" alt="Vikash Sinha" /></div><div className="coral-orbit" /><div className="paper-shape" /></div></section>
    <section className="metrics" aria-label="Career outcomes">{impact.map((item) => <article className={`metric metric--${item.tone}`} key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}</section>
    <section className="belief section"><p className="eyebrow eyebrow--coral">The marketing I believe in</p><div className="belief-grid"><h2>The buyer does not experience your org chart.</h2><p>They experience one promise, one buying journey and one decision. That is why brand, demand, content, CRM and sales cannot work as separate departments.</p></div><Link className="text-link" href="/about">Read my full career story ↗</Link></section>
    <section className="stories section" id="impact"><p className="eyebrow">Selected operating stories</p><div className="story-list">{stories.map((story) => <article className="story" key={story.number}><span>{story.number}</span><h3>{story.title}</h3><p>{story.text}</p></article>)}</div></section>
    <section className="blog" id="blog"><div className="blog-head"><div><p className="eyebrow">The blog</p><h2>Inside the Buying Committee</h2></div><a href="https://www.linkedin.com/newsletters/inside-the-buying-committee-7484217923839041536/" target="_blank" rel="noreferrer">Subscribe on LinkedIn <span>↗</span></a></div><p className="blog-intro">Practical notes on B2B buying behaviour, demand generation and the systems that turn marketing into revenue.</p><div className="article-list"><a className="article-card article-card--featured" href="https://www.linkedin.com/newsletters/inside-the-buying-committee-7484217923839041536/" target="_blank" rel="noreferrer"><span>Latest edition · B2B buying</span><h3>Your B2B Funnel Is Not Broken. You Are Selling to Only One Person.</h3><p>Most complex deals are decided by a group. The gap is not more leads—it is marketing that speaks to the entire buying committee.</p><b>Read the article ↗</b></a><article className="article-card"><span>Coming next · Revenue systems</span><h3>The Buyer Does Not Experience Your Org Chart.</h3><p>Why brand, demand, CRM and sales must feel like one commercial journey to the person deciding whether to buy.</p></article><article className="article-card"><span>Coming next · Leadership</span><h3>When Marketing Activity Starts Looking Like Progress.</h3><p>How to move a team from reporting effort to proving commercial value—without reducing marketing to a dashboard.</p></article></div></section>
    <section className="contact section" id="contact"><p className="eyebrow">Let&apos;s talk</p><h2>Looking for a marketing leader who connects brand, demand and revenue?</h2><div className="contact-actions"><a className="button button--light" href="mailto:vikash@marketingbeyondmarketing.com">Email Vikash <span>↗</span></a><a href="https://www.linkedin.com/in/vikash-senha/" target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a></div></section>
    <footer><strong>VIKASH SINHA</strong><span>Delhi NCR · Open to hybrid or remote leadership roles</span><a href="https://github.com/vekaashsenha" target="_blank" rel="noreferrer">GitHub ↗</a></footer>
  </main>;
}
