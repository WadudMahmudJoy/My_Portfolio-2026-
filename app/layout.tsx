import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space'
});

export const metadata: Metadata = {
  title: 'Md. Wadud Mahmud Joy — Researcher Portfolio',
  description:
    'Portfolio of Md. Wadud Mahmud Joy — CSE Graduate, Researcher, and ML Engineer from Dhaka, Bangladesh. Specializing in Medical AI, Computer Vision, and Reliable Machine Learning.',
  keywords: ['Researcher', 'ML Engineer', 'Computer Vision', 'CSE Graduate', 'Bangladesh', 'IUBAT', 'Machine Learning', 'Deep Learning'],
  authors: [{ name: 'Md. Wadud Mahmud Joy', url: 'https://github.com/WadudMahmudJoy' }],
  openGraph: {
    title: 'Md. Wadud Mahmud Joy — Researcher Portfolio',
    description: 'CSE Graduate. Researcher. ML Engineer. Building measurable, explainable AI systems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Wadud Mahmud Joy — Research Portfolio',
    description: 'CSE Graduate. Researcher. ML Engineer. Building measurable, explainable AI systems.',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
