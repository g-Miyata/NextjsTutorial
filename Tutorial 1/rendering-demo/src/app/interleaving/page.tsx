import ClientComponentOne from '@/components/client-component-one';
import ServerComponentOne from '@/components/server-component-one';

const InteleavingPage = () => {
  return (
    <>
      <h1>Interleaving Page</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
      {/* <ClientComponentOne /> */}
    </>
  );
};

export default InteleavingPage;
