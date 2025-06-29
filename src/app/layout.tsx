import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eslam Sobhey - كاتب محتوى تسويقي",
  description: "Eslam Sobhey - كاتب محتوى تسويقي",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
