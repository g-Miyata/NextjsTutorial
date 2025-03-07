'use client';

import { useState } from 'react';

const NavLinks = () => {
  const [search, setSearch] = useState('');
  console.log('NavSearch rendered');
  return (
    <div>
      <label htmlFor="search">nav search input</label>
      <input type="text" id="search" onChange={(e) => setSearch(e.target.value)} />
      <p>{search}</p>
    </div>
  );
};

export default NavLinks;
