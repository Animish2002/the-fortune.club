import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://thefortune.club";
const SITE_NAME = "TheFortune.Club";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "TheFortune.Club | AI-Powered Software & Business Automation",
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Custom software development, AI-powered automation, and a complete white-label SaaS ecosystem — WhatsApp bots, HRMS, ATS, Social Media AI, and more. Built for Indian businesses and global clients.",

  keywords: [
    "software development company India",
    "custom software development",
    "AI software development India",
    "WhatsApp automation India",
    "business automation software",
    "white label SaaS India",
    "HRMS software India",
    "ATS recruitment software",
    "mobile app development India",
    "workflow automation software",
    "social media management AI",
    "live chat support software",
    "software development company Mumbai",
    "AI-powered business software",
    "reseller SaaS panel India",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "TheFortune.Club | AI-Powered Software & Business Automation",
    description:
      "One partner. Complete digital power. Custom software + a full white-label SaaS suite — WhatsApp bots, HRMS, ATS, Social Media AI. Built for Indian businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TheFortune.Club — AI-Powered Software & Business Automation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TheFortune.Club | AI-Powered Software & Business Automation",
    description:
      "Custom software + complete white-label SaaS suite for Indian businesses. WhatsApp bots, HRMS, ATS, Social Media AI & more.",
    images: ["/og-image.png"],
    creator: "@thefortuneclub",
    site: "@thefortuneclub",
  },

  alternates: {
    canonical: SITE_URL,
  },

  category: "technology",
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "AI-powered custom software development and white-label SaaS ecosystem for Indian businesses and global clients.",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/thefortune-club",
    "https://www.instagram.com/thefortune.club",
    "https://twitter.com/thefortuneclub",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  offers: {
    "@type": "AggregateOffer",
    description:
      "Custom software development, WhatsApp automation, HRMS, ATS, Social Media Management, Workflow Automation, Ticket & Live Chat",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TheFortune.Club SaaS Suite",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "A complete white-label SaaS ecosystem including WhatsApp Automation, Social Media Management, Workflow Automation, ATS, Ticket & Live Chat, and HRMS — all managed from a single Central Reseller Panel.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  },
  featureList: [
    "WhatsApp Automation & AI Chatbot",
    "Social Media Management with AI Content Generation",
    "No-Code Workflow Automation",
    "Application Tracking System",
    "Ticket & Live Chat Support",
    "HRMS & Payroll Management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-foreground selection:bg-brand-gold selection:text-black",
          inter.variable,
          jakarta.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
