import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BENS,
  GA_ID,
  OWNER_EMAIL,
  OWNER_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  clampDescription,
} from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const DEFAULT_TITLE = "Biomagnetistas.com — Guía de los mejores biomagnetistas por país";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: clampDescription(SITE_DESCRIPTION),
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: DEFAULT_TITLE,
    description: clampDescription(SITE_DESCRIPTION),
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    locale: "es_419",
    type: "website",
    images: [{ url: `${SITE_URL}/images/bens/terapia-imanes-bens-surco.jpg`, width: 1200, height: 680 }],
  },
  twitter: { card: "summary_large_image" },
  verification: { google: "twFiUZPHh5Eq-K0X4F9F8oKyv3-NYE0DqKlIqc0QuNM" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "es",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        email: OWNER_EMAIL,
        founder: { "@type": "Person", name: OWNER_NAME },
        address: { "@type": "PostalAddress", addressLocality: "Lima", addressCountry: "PE" },
        sponsor: { "@type": "Organization", name: BENS.name, url: BENS.site },
      },
    ],
  };

  return (
    <html lang="es" className={inter.variable}>
      <head>
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href*="biomagnetismobens.pe"]');if(a){gtag('event','bens_click',{link_url:a.href,page:location.pathname});}});`,
              }}
            />
          </>
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
