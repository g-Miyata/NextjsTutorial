'use client';

import { useState } from 'react';

export default function AuthTemplate({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState('');

  return (
    <div className="text-white">
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {children}
    </div>
  );
}
