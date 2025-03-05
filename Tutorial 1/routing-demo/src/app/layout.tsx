import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Next.js Tutorial - Codevolution',
    template: '%s | Codevolution',
  },
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-400 p-4">
          <h1>Header</h1>
        </header>
        {children}
        <footer className="bg-blue-600 p-4">
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
