import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuickChat from "@/components/ui/QuickChat";
import ConsoleSuppressor from "@/components/ui/ConsoleSuppressor";
import Providers from "@/components/Providers";
import ScrollToTop from "@/components/ui/ScrollToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LAZO Construction LLC | Residential & Commercial Contractor | Texas",
  description:
    "Professional residential and commercial construction services in Austin, Houston, and Central Texas. Kitchen remodels, bathroom renovations, commercial build outs. 20+ years experience.",
  openGraph: {
    title: "LAZO Construction LLC | Residential & Commercial Contractor | Texas",
    description:
      "Professional residential and commercial construction services in Austin, Houston, and Central Texas. Kitchen remodels, bathroom renovations, commercial build outs.",
    url: "https://www.lazoconstructiontx.com",
    siteName: "LAZO Construction LLC",
    images: [
      {
        url: "https://www.lazoconstructiontx.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "LAZO Construction LLC - Residential & Commercial Contractor in Texas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAZO Construction LLC | Residential & Commercial Contractor | Texas",
    description:
      "Professional residential and commercial construction services in Austin, Houston, and Central Texas.",
    images: ["https://www.lazoconstructiontx.com/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "LAZO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased flex flex-col min-h-screen`}
      >
        <Providers>
          <Header />
          <ScrollToTop />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <QuickChat />
          <ConsoleSuppressor />
        </Providers>
      </body>
    </html>
  );
}
