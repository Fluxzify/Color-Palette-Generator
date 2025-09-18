import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MarkGithubIcon } from "@primer/octicons-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://colorpalettehub.netlify.app"),
  title: "Color Palette Hub 🎨",
  description: "Generate random or custom color palettes and gradients easily.",
  keywords: ["colors", "palette", "gradients", "design", "art", "creative tools"],
  authors: [{ name: "Jose", url: "https://colorpalettehub.netlify.app" }],
  openGraph: {
    title: "Color Palette Generator",
    description: "Create vibrant color palettes and gradients for your projects.",
    url: "https://colorpalettehub.netlify.app",
    siteName: "Color Palette Generator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Color Palette Generator Preview",
      },
    ],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
<aside>
  <div className="flex flex-row items-center">
    <p>© {new Date().getFullYear()} - JosevDev</p>

    <a
      href="https://github.com/Fluxzify"
      className="flex items-center gap-2 pl-4 hover:text-blue-500"
    >
      <MarkGithubIcon size={24} />
      GitHub
    </a>
  </div>
</aside>
</footer>
      </body>
      
    </html>
  );
}
