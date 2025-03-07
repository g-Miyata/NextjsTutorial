import 'server-only';
const serverSideFunction = () => {
  console.log(`use multiple libraries, use evironment variables, interact  with a database, process and confidential information`);
  return 'server result';
};

export default serverSideFunction;
