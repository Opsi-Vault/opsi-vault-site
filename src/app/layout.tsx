import "./globals.css";
import type { Metadata } from "next";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leven Plus",
  description: "Your Partner for Empowering Tech Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="Leven Plus, Leven+, Leven +, Leven Plus Infotech, web development, app development, hosting services, AI solutions, IT consultancy, machine learning, cyber security, cloud solutions, vps, IT management"
        />
        <meta name="author" content="Leven Plus" />
        <meta
          name="google-site-verification"
          content="I4bSKo4qhYXtLwP4_cCzA2AHadn6WgKE0KEOis6Wz5o"
        />
      </head>
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
