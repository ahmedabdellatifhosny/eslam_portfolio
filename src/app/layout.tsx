import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eslam Portfolio",
  description: "Eslam Portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
