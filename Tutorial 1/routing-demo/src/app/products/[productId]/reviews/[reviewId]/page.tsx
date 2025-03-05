// const ProductReview = async ({ params }: { params: { productId: string; reviewId: string } }) => {
//   const { productId, reviewId } = params;
//   return (
//     <h1>
//       Review {reviewId} of Product {productId}
//     </h1>
//   );
// };

// export default ProductReview;
import { notFound, redirect } from 'next/navigation';

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default async function ProductReview({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
  const { productId, reviewId } = await params;
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error('Error loading review');
  }
  if (parseInt(reviewId) > 1000) {
    notFound();
    redirect('/products');
  }
  return (
    <h1>
      Review {reviewId} of Product {productId}
    </h1>
  );
}
