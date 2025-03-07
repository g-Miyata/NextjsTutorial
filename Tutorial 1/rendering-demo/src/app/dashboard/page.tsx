'use client';
import { useState } from 'react';
const DashboardPage = () => {
  console.log('Dashboard client component');
  const [name, setName] = useState('');
  return (
    <div>
      <h1>Dashboard</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Welcome, {name}!</p>
    </div>
  );
};

export default DashboardPage;
