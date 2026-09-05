import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: {
    default: `${siteConfig.name} | Printer Drivers & Hardware Troubleshooting`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "printer drivers",
    "device drivers",
    "printer offline fix",
    "driver troubleshooting",
    "scanner drivers",
    "graphics drivers",
    "audio drivers",
    "wifi driver setup"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favIcon.png",
    shortcut: "/favIcon.png",
    apple: "/favIcon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

