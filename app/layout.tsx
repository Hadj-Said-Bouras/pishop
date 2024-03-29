import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WOS",
  description: "A flown shop to enjoy new high quilty products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
