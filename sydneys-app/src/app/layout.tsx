import type { Metadata } from "next";
import { Geist, Geist_Mono, Playwrite_CZ} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playwriteCZ = Playwrite_CZ({
  variable: "--font-playwrite-cz",
});

export const metadata: Metadata = {
  title: "Sydney Shillinglaw",
  description: "Personal Website",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playwriteCZ.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
