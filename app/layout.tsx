import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
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
  title: "Arsana Labs",
  description:
    "We build open-source products and provide expert software consulting.",
  metadataBase: new URL("https://arsanalabs.com"),
  openGraph: {
    type: "website",
    title: "Arsana Labs",
    description:
      "We build open-source products and provide expert software consulting.",
    url: "https://arsanalabs.com",
    siteName: "Arsana Labs",
    images: [
      {
        url: "/opengraph-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arsana Labs",
    description:
      "We build open-source products and provide expert software consulting.",
    images: ["/opengraph-image.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
