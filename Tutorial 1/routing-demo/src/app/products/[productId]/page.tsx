const ProductDetails = async ({ params }: { params: { productId: string } }) => {
  const productId = params.productId;
  return <h1>Details of Product {productId}</h1>;
};

export default ProductDetails;
