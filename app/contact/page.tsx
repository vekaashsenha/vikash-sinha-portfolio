import Link from "next/link";

export default function ContactPage() {
  return <main className="contact-new-site">
    <header className="studio-nav">
      <Link href="/" className="studio-wordmark" aria-label="Vikash Sinha home">VIKASH<br />SINHA</Link>
      <p>LET&apos;S TALK / THE RIGHT ROLE</p>
      <nav><Link href="/about-me">About me</Link><Link href="/about">Résumé</Link><Link href="/products">Products</Link><Link href="/blog">Blog</Link><Link className="nav-button" href="/contact" aria-current="page">Contact ↗</Link></nav>
    </header>
    <section className="contact-new-hero">
      <div className="contact-new-copy"><p className="kicker">AVAILABLE FOR B2B MARKETING LEADERSHIP</p><h1>Let&apos;s make<br /><em>growth</em><br />measurable.</h1><p>For Head of Marketing, AGM Marketing and GM Marketing opportunities where brand, demand and revenue need to work as one system.</p></div>
      <div className="contact-new-card-wrap">
        <article className="contact-new-card">
          <p className="card-name">VIKASH SINHA</p>
          <h2>Brand. Demand.<br />Revenue.<br /><em>One system.</em></h2>
          <div className="card-rule" />
          <a href="mailto:Vekaashsenha@gmail.com">Vekaashsenha@gmail.com</a>
          <a href="https://www.linkedin.com/in/vikash-senha/" target="_blank" rel="noreferrer">linkedin.com/in/vikash-senha ↗</a>
          <span>Delhi NCR · Open to hybrid / remote</span>
        </article>
      </div>
    </section>
    <section className="contact-new-links"><Link href="/about">Career story ↗</Link><Link href="/writing">Read the writing ↗</Link><a href="/Vikash-Sinha-Resume.pdf" target="_blank" rel="noreferrer">Download résumé ↗</a></section>
    <footer className="studio-footer"><strong>VIKASH SINHA</strong><span>Marketing, made commercial.</span><Link href="/">Back home ↗</Link></footer>
  </main>;
}
