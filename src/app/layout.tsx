import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fidelcristopher.dev"),
  title: "Fidel Cristopher | AI & Machine Learning Engineer",
  description:
    "I'm Fidel Cristopher, an AI and machine learning engineer from Indonesia. I build practical software, data products, and machine learning systems.",
  keywords: [
    "Fidel Cristopher",
    "fidelcristopher",
    "Fidel Cristopher portfolio",
    "AI engineer Indonesia",
    "machine learning engineer Indonesia",
    "full stack developer",
    "data products",
    "MLOps"
  ],
  authors: [{ name: "Fidel Cristopher" }],
  openGraph: {
    title: "Fidel Cristopher | AI & Machine Learning Engineer",
    description:
      "I'm Fidel Cristopher, an AI and machine learning engineer from Indonesia. I build practical software, data products, and machine learning systems.",
    url: "https://fidelcristopher.dev",
    siteName: "Fidel Cristopher",
    locale: "en_US",
    type: "website",
    images: [{ url: "/image/og.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fidel Cristopher | AI & Machine Learning Engineer",
    description:
      "I'm Fidel Cristopher, an AI and machine learning engineer from Indonesia. I build practical software, data products, and machine learning systems.",
    creator: "@fidelcristopher",
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
