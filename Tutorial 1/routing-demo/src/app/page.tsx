import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome Page</h1>
      <Link href="/blog">Blog</Link>
      <hr />
      <Link href="/products">Products</Link>
      <hr />
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link> <br />
      <Link href="/articles/breaking-news-123?lang=pt">Read in Portuguese</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=es">Read in Spanish</Link>
    </>
  );
}
