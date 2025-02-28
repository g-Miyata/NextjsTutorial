// const ProductReview = async ({ params }: { params: { productId: string; reviewId: string } }) => {
//   const { productId, reviewId } = params;
//   return (
//     <h1>
//       Review {reviewId} of Product {productId}
//     </h1>
//   );
// };

// export default ProductReview;
import { notFound } from 'next/navigation';
export default async function ProductReview({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {reviewId} of Product {productId}
    </h1>
  );
}
