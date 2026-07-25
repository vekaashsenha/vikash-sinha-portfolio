import Link from "next/link";

const stack = [
  ["✦", "ChatGPT + Codex", "Research, product thinking and faster build loops"],
  ["⌘", "GitHub + Git", "Version control, experiments and shipping discipline"],
  ["↗", "Supabase", "Database and backend foundation"],
  ["▲", "Vercel", "Fast web deployment"],
  ["●", "Figma", "Interface thinking and design direction"],
  ["₹", "Razorpay", "Payments-ready product infrastructure"],
];

export default function ProductsPage() {
  return <main className="products-site">
    <header className="studio-nav"><Link href="/" className="studio-wordmark" aria-label="Vikash Sinha home">VIKASH<br />SINHA</Link><p>PRODUCTS / BUILDING IN PUBLIC</p><nav><Link href="/about-me">About me</Link><Link href="/about">Résumé</Link><Link href="/products" aria-current="page">Products</Link><Link href="/blog">Blog</Link><Link className="nav-button" href="/contact">Contact ↗</Link></nav></header>
    <section className="products-hero"><p className="kicker">FROM PROBLEM TO PRODUCT</p><h1>I build useful<br /><em>systems</em>, not<br />features for show.</h1><p>My product work begins with the same question that guides my marketing work: what job is the user trying to get done?</p></section>
    <section className="querycite-feature"><div className="querycite-feature-mark"><span>QC</span><p>QUERY<br />CITE</p></div><div><p className="kicker">PRODUCT 01 / IN BUILD</p><h2>Research needs proof.</h2><p>QueryCite is an AI-assisted research and citation workflow designed to help people move from useful sources to verifiable, structured output.</p><div className="product-flow"><span>ASK</span><b>→</b><span>RESEARCH</span><b>→</b><span>VERIFY</span><b>→</b><span>CITE</span></div></div><aside><span>01</span><p>Built with a practical, low-cost founder stack.</p></aside></section>
    <section className="build-stack"><p className="kicker">THE BUILD STACK</p><h2>From idea to live product.</h2><div>{stack.map(([icon, title, detail]) => <article key={title}><b>{icon}</b><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
    <section className="product-principles"><article><span>01</span><h2>Start with the user&apos;s friction.</h2><p>Not a feature list. Not a trend. A repeatable problem worth solving.</p></article><article><span>02</span><h2>Validate before building big.</h2><p>Use conversations, prototypes and early users to find the real job.</p></article><article><span>03</span><h2>Ship, learn, improve.</h2><p>Build a focused version, listen hard and earn the next layer of complexity.</p></article></section>
    <section className="products-end"><p className="kicker">WHAT I&apos;M BUILDING NEXT</p><h2>Practical technology that makes expertise accessible.</h2><Link href="/contact">Talk product or growth ↗</Link></section>
    <footer className="studio-footer"><strong>VIKASH SINHA</strong><span>Marketing, made commercial.</span><Link href="/">Back home ↗</Link></footer>
  </main>;
}
