import type { Metadata } from "next";
import "./globals.css";
import { Providers } from './providers'


export const metadata: Metadata = {
  title: "Anime Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      {/* Init Chakra */}
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
