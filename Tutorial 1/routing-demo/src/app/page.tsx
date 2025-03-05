import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome Page</h1>
      <Link href="/blog">Blog</Link>
      <hr />
      <Link href="/products">Products</Link>
    </>
  );
}
