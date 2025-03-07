import 'client-only';
const clientSideFunction = () => {
  console.log('user window object, use localStorage');
  return 'client result';
};

export default clientSideFunction;
