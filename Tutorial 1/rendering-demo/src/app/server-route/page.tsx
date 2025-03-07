import ImageSlider from '@/components/ImageSlider';
import serverSideFunction from '@/utils/server-utils';
const ServerRoutePage = () => {
  const result = serverSideFunction();
  return (
    <>
      <h1>Server Route {result}</h1>
      <ImageSlider />;
    </>
  );
};

export default ServerRoutePage;
