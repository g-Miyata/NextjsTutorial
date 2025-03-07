'use client';
import { useState } from 'react';
import ClientComponentTwo from './client-component-two';
const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState('Batman');
  return (
    <>
      <h1>Client Component One - {name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <ClientComponentTwo />
      {children}
    </>
  );
};

export default ClientComponentOne;
