'use client';
import { useState } from 'react';
const ClientComponentTwo = () => {
  const [name, setName] = useState('Batman 2');
  return (
    <>
      <h1>Client Component Two - {name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default ClientComponentTwo;
