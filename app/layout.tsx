import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KÉK Nyelvi Asszisztens - Könnyen Érthető AI Kommunikáció",
  description: "A KÉK Nyelvi Asszisztens egy AI-powered chatbot, amely Könnyen Érthető Kommunikációban (KÉK) válaszol. Egyszerű, tiszta magyarázatok rövid mondatokkal.",
  keywords: ["KÉK", "Könnyen Érthető Kommunikáció", "AI asszisztens", "chatbot", "magyar", "accessibility"],
  authors: [{ name: "KÉK Projekt" }],
  creator: "KÉK Projekt",
  publisher: "KÉK Projekt",
  robots: "index, follow",
  canonical: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}`,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}`,
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}`,
    title: "KÉK Nyelvi Asszisztens - Könnyen Érthető AI Kommunikáció",
    description: "Egy AI asszisztens, amely Könnyen Érthető Kommunikációban magyaráz. Egyszerű, világos válaszok rövid mondatokkal.",
    siteName: "KÉK Nyelvi Asszisztens",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "KÉK Nyelvi Asszisztens",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KÉK Nyelvi Asszisztens",
    description: "Egy AI asszisztens, amely Könnyen Érthető Kommunikációban magyaráz.",
    images: [`${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/og-image.png`],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "KÉK Asszisztens",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#f8f9fa" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f0f0f" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "KÉK Nyelvi Asszisztens",
              "description": "A KÉK Nyelvi Asszisztens egy AI-powered chatbot, amely Könnyen Érthető Kommunikációban válaszol.",
              "url": "https://kek-nyelviastszisztens.com",
              "applicationCategory": "Utility",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "HUF"
              },
              "creator": {
                "@type": "Organization",
                "name": "KÉK Projekt"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
