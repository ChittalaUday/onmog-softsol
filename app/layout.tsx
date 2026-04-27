import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onmog Softsol | Transforming Challenges into Sustainable Solutions",
  description: "Multidisciplinary technology and engineering firm specializing in Rail Signaling, Staffing Solutions, and Digital Innovation. Bridging the gap between traditional infrastructure and digital innovation.",
  keywords: ["Onmog Softsol", "Prodigy HRM", "Rail Signaling", "Staffing Solutions", "Web Development", "Digital Solutions", "Engineering", "Hyderabad"],
  authors: [{ name: "Onmog Softsol Private Limited" }],
  openGraph: {
    title: "Onmog Softsol | Precision Engineering & Digital Innovation",
    description: "Transforming complex organizational challenges into sustainable competitive advantages.",
    url: "https://www.prodigyhrm.com",
    siteName: "Onmog Softsol",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
