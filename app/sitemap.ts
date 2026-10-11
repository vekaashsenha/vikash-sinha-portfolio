import type { MetadataRoute } from "next";

const base = "https://vikashsinha.dev";
const routes = ["/", "/about-me", "/about", "/services", "/products", "/blog", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: new URL(path, base).toString(),
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/blog" ? 0.8 : 0.6,
  }));
}
