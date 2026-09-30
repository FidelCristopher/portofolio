import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zickrian.dev"),
  title: "Firdaus Khotibul Zickrian | AI & Machine Learning Engineer",
  description:
    "I'm Firdaus Khotibul Zickrian, an AI and machine learning engineer from Indonesia. I build practical software, data products, and machine learning systems.",
  keywords: [
    "Firdaus Khotibul Zickrian",
    "zickrian",
    "Firdaus Khotibul Zickrian portfolio",
    "AI engineer Indonesia",
    "machine learning engineer Indonesia",
    "full stack developer",
    "data products",
    "MLOps"
  ],
  authors: [{ name: "Firdaus Khotibul Zickrian" }],
  openGraph: {
    title: "Firdaus Khotibul Zickrian | AI & Machine Learning Engineer",
    description:
      "I'm Firdaus Khotibul Zickrian, an AI and machine learning engineer from Indonesia. I build practical software, data products, and machine learning systems.",
    url: "https://www.zickrian.dev",
    siteName: "Firdaus Khotibul Zickrian",
    locale: "en_US",
    type: "website",
    images: [{ url: "/image/og.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Firdaus Khotibul Zickrian | AI & Machine Learning Engineer",
    description:
      "I'm Firdaus Khotibul Zickrian, an AI and machine learning engineer from Indonesia. I build practical software, data products, and machine learning systems.",
    creator: "@zickrian",
    images: ["/image/og.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className="bg-background text-foreground antialiased min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
