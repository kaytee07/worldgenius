import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "WorldG3nius",
  description: "ShopNow",
   icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      
      <body style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>{children}</body>
    </html>
  );
}
