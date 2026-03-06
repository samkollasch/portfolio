import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fontLondon = localFont({
  src: "../fonts/chalet-london-sixty.woff2",
  display: "swap",
  variable: "--font-london",
});

const fontNewYork = localFont({
  src: "../fonts/chalet-new-york-sixty.woff2",
  display: "swap",
  variable: "--font-new-york",
});

export const metadata: Metadata = {
  title: "Samantha Kollasch | Portfolio",
  description: "Staff Web Developer / Full-Stack Engineer with 20 years building scalable, high-performance web platforms.",
  icons: {
    icon: "/digital.svg",
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
        className={`${fontLondon.variable} ${fontNewYork.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
