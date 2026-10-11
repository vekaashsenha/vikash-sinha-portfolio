import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticle, publishedArticles } from "../../writing/articles";

const baseUrl = "https://vikashsinha.dev";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publishedArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found", robots: { index: false } };
  return {
    title: `${article.title} | Vikash Sinha`,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.description, url: `${baseUrl}/blog/${article.slug}`, publishedTime: article.publishedAt, modifiedTime: article.updatedAt },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const url = `${baseUrl}/blog/${article.slug}`;
  const schema = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: article.title, description: article.description,
    datePublished: article.publishedAt, dateModified: article.updatedAt ?? article.publishedAt,
    mainEntityOfPage: url, url,
    author: { "@type": "Person", name: "Vikash Sinha", url: baseUrl },
    publisher: { "@type": "Person", name: "Vikash Sinha", url: baseUrl },
  };
  return <main style={{maxWidth:760,margin:"0 auto",padding:"3rem 1.25rem",lineHeight:1.7}}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
    <nav><Link href="/blog">← All writing</Link></nav>
    <article>
      <header><p>INSIDE THE BUYING COMMITTEE</p><h1>{article.title}</h1><p>{article.description}</p><p>Vikash Sinha · <time dateTime={article.publishedAt}>{article.publishedAt}</time></p></header>
      {article.body.split("\n\n").map((paragraph,index)=><p key={index}>{paragraph}</p>)}
      {article.sources?.length ? <section><h2>Sources</h2><ul>{article.sources.map(s=><li key={s.url}><a href={s.url} rel="noopener noreferrer">{s.label}</a></li>)}</ul></section> : null}
      {article.linkedinUrl ? <p><a href={article.linkedinUrl}>Discuss this article on LinkedIn ↗</a></p> : null}
    </article>
  </main>;
}
