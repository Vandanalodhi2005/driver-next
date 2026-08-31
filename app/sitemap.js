import { siteConfig } from "@/lib/site-config";

export default function sitemap() {
  const baseUrl = siteConfig.url;

  const routes = [
    "",
    "/drivers",
    "/drivers/printers",
    "/drivers/scanners",
    "/drivers/graphics",
    "/drivers/audio",
    "/drivers/network",
    "/drivers/bluetooth",
    "/drivers/usb",
    "/knowledge-base",
    "/blog",
    "/about",
    "/contact",
    "/sitemap-page",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/cookie-policy",
    "/advertising-disclosure",
    "/accessibility",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogRoutes = siteConfig.featuredPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
