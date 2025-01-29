import { Footer } from "@/components/commons/Footer";
import { Header } from "@/components/commons/Header";
import { Title } from "@/components/commons/Title";
import type { Metadata } from "next";
import { Chewy, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const chewy = Chewy({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dúvidas Orlando",
  description: "Dúvidas Orlando - Seu guia de viagem para Orlando",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 pt-10 antialiased`}
      >
        <Title />
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
