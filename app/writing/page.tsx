import Link from "next/link";

const essays = [
  ["01", "Your B2B Funnel Is Not Broken. You Are Selling to Only One Person.", "Most complex deals are decided by a group. The gap is not more leads—it is marketing that speaks to the entire buying committee."],
  ["02", "The Buyer Does Not Experience Your Org Chart.", "Why brand, demand, CRM and sales must feel like one commercial journey to the person deciding whether to buy."],
  ["03", "When Marketing Activity Starts Looking Like Progress.", "How to move a team from reporting effort to proving commercial value—without reducing marketing to a dashboard."],
];

export default function WritingPage() {
  return <main className="writing-site">
    <header className="studio-nav">
      <Link href="/" className="studio-wordmark" aria-label="Vikash Sinha home">VIKASH<br />SINHA</Link>
      <p>THE BLOG / INSIDE THE BUYING COMMITTEE</p>
      <nav><Link href="/about-me">About me</Link><Link href="/about">Résumé</Link><Link href="/products">Products</Link><Link href="/blog" aria-current="page">Blog</Link><Link className="nav-button" href="/contact">Contact ↗</Link></nav>
    </header>
    <section className="writing-hero"><p className="kicker">THE BLOG / NEWSLETTER</p><h1>Notes from<br />inside the <em>buying<br />committee.</em></h1><p>Practical B2B marketing, buyer behaviour and revenue-system lessons for marketers and business leaders.</p><a href="https://www.linkedin.com/newsletters/inside-the-buying-committee-7484217923839041536/" target="_blank" rel="noreferrer">Subscribe on LinkedIn ↗</a></section>
    <section className="essay-list" aria-label="Articles">{essays.map(([number, title, description]) => <article key={number}><span>{number}</span><div><p className="kicker">B2B GROWTH / BUYER BEHAVIOUR</p><h2>{title}</h2><p>{description}</p></div><a href="https://www.linkedin.com/newsletters/inside-the-buying-committee-7484217923839041536/" target="_blank" rel="noreferrer">Read ↗</a></article>)}</section>
    <section className="writing-end"><p className="kicker">A GOOD CONVERSATION STARTS HERE</p><h2>Have a B2B growth problem worth solving?</h2><Link href="/contact">Start a conversation ↗</Link></section>
    <footer className="studio-footer"><strong>VIKASH SINHA</strong><span>Marketing, made commercial.</span><Link href="/">Back home ↗</Link></footer>
  </main>;
}
