import { Metadata } from 'next';

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `Product ${id}`,
  };
};

const ProductDetails = async ({ params }: Props) => {
  const productId = (await params).productId;
  return <h1>Details of Product {productId}</h1>;
};

export default ProductDetails;
