import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      // AI search bots — explicitly allow for GEO (Generative Engine Optimization)
      { userAgent: "GPTBot", allow: "/" },           // OpenAI / ChatGPT
      { userAgent: "ChatGPT-User", allow: "/" },     // ChatGPT with browsing
      { userAgent: "PerplexityBot", allow: "/" },    // Perplexity AI
      { userAgent: "ClaudeBot", allow: "/" },        // Anthropic Claude
      { userAgent: "anthropic-ai", allow: "/" },     // Anthropic Claude (alt)
      { userAgent: "Amazonbot", allow: "/" },        // Amazon Alexa
      { userAgent: "cohere-ai", allow: "/" },        // Cohere
      { userAgent: "YouBot", allow: "/" },           // You.com
    ],
    sitemap: "https://thefortune.club/sitemap.xml",
    host: "https://thefortune.club",
  };
}
