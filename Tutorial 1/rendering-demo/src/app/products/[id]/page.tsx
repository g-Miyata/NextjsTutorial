export const dynamicParams = false;
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

interface ProductPageProp {
  params: Promise<{ id: string }>;
}

const ProductPage = async ({ params }: ProductPageProp) => {
  const { id } = await params;
  return (
    <h1>
      Details of Product {id} redered at {new Date().toLocaleTimeString()}
    </h1>
  );
};

export default ProductPage;
