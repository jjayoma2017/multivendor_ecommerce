// Next.js
import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";
// Global css
import "./globals.css";
import { ThemeProvider } from "next-themes";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

// Fonts
const interFont = Inter({ subsets: ['latin'] });

const barlowFont = Barlow({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: "--font-barlow"
})

// Metadata
export const metadata: Metadata = {
  title: "GoShop",
  description: "Welcome to GoShop, your ultimate destination for seamless online shopping! Discover a vast products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${interFont.className} ${barlowFont.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
