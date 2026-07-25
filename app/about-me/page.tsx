import Link from "next/link";

const beliefs = [
  ["01", "I start with the buyer.", "The job is not to make marketing louder. It is to make the decision easier for the person on the other side."],
  ["02", "I work close to revenue.", "Brand matters. Demand matters. But the work earns its place when sales can use it and customers act on it."],
  ["03", "I build systems, then teams.", "The best work does not rely on one person pushing harder. It gives people a clear rhythm, standard and way to win together."],
  ["04", "I stay curious.", "Marketing is changing fast. I am learning by building with AI, code and product tools—not only reading about them."],
];

export default function AboutMePage() {
  return <main className="about-me-site">
    <header className="studio-nav"><Link href="/" className="studio-wordmark" aria-label="Vikash Sinha home">VIKASH<br />SINHA</Link><p>ABOUT ME / THE HUMAN SYSTEM</p><nav><Link href="/about-me" aria-current="page">About me</Link><Link href="/about">Résumé</Link><Link href="/products">Products</Link><Link href="/blog">Blog</Link><Link className="nav-button" href="/contact">Contact ↗</Link></nav></header>
    <section className="about-me-hero"><div><p className="kicker">VIKASH SINHA / MARKETING LEADER &amp; PRODUCT BUILDER</p><h1>I don&apos;t believe<br />marketing begins<br />with a <em>campaign.</em></h1><p>It begins with a real person trying to understand a problem, compare options and make a decision they can defend.</p></div><aside><span>VS</span><p>Curious by default.<br />Commercial by practice.</p><b>12+<small>years building<br />what moves business</small></b></aside></section>
    <section className="about-me-manifesto"><p className="kicker">HOW I THINK</p><h2>Complex work becomes useful when it is made clear enough for people to act on it.</h2><div>{beliefs.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="about-me-now"><div><p className="kicker">RIGHT NOW</p><h2>Working at the intersection of B2B growth, AI and practical product building.</h2></div><div><article><b>↗</b><h3>Learning by shipping</h3><p>Using GitHub, Figma, Supabase, Vercel, ChatGPT and Codex to turn ideas into something people can use.</p></article><article><b>QC</b><h3>Building QueryCite</h3><p>Exploring a research and citation workflow that helps people move from useful sources to verifiable output.</p></article></div></section>
    <section className="about-me-end"><p className="kicker">WHAT I&apos;M LOOKING FOR</p><h2>A role where marketing is trusted to create commercial momentum.</h2><Link href="/contact">Start a conversation ↗</Link></section>
    <footer className="studio-footer"><strong>VIKASH SINHA</strong><span>Marketing, made commercial.</span><Link href="/about">See the web résumé ↗</Link></footer>
  </main>;
}
