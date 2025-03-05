'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { label: 'Register', href: '/register' },
  { label: 'Login', href: '/login' },
  { label: 'Forgot Password', href: '/forgot-password' },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState('');
  const pathname = usePathname();
  return (
    <div className="w-full flex flex-col text-center text-black">
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href != '/');
        return (
          <Link className={isActive ? 'font-bold text-blue-300 mr-4' : 'text-blue-500 mr-4'} href={link.href} key={link.label}>
            {link.label}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
