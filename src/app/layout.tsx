import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  ...buildPageMetadata({}),
  applicationName: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#DFF1F1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
