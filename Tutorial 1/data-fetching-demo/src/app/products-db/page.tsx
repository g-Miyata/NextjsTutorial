import { getProducts } from "@/prisma-db";
import ProductDetails from "./product-details";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductsDBPage = async () => {
  const products: Product[] = await getProducts();

  return <ProductDetails products={products} />;
};

export default ProductsDBPage;
