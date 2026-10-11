/** Editorial registry. Add only reviewed, published article URLs here.
 * Draft titles and newsletter teasers are intentionally excluded.
 */
export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  body: string;
  sources?: { label: string; url: string }[];
  linkedinUrl?: string;
};

export const publishedArticles: Article[] = [];

export function getArticle(slug: string): Article | undefined {
  return publishedArticles.find((article) => article.slug === slug);
}
