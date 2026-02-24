import type { Metadata } from "next";
import Script from "next/script";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "TorchLink | Ultra-Fast Silicon Photonics & Optoelectronic Devices",
  description: "TorchLink pioneers cutting-edge silicon photonics and optoelectronic devices, delivering ultra-fast data transmission for AI data centers and next-generation connectivity.",
  metadataBase: new URL("https://www.torchlink.com"),
  alternates: {
    // canonical is set per page
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Script
          async
          defer
          src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${repositoryName}`}
          strategy="afterInteractive"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
