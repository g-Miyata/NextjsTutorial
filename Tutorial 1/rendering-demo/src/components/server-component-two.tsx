import fs from 'fs';
const ServerComponentTwo = () => {
  fs.readFileSync('src/components/server-component-two.tsx', 'utf-8');
  return (
    <>
      <h1>Server Component Two</h1>
    </>
  );
};

export default ServerComponentTwo;
