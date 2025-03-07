'use client';
import serverSideFunction from '@/utils/server-utils';
const ClienteRoute = () => {
  const result = serverSideFunction();
  return <h1>Client Route {result}</h1>;
};

export default ClienteRoute;
