import Link from 'next/link';

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <h1>Product List</h1>
      <ul>
        <li>
          <Link href='/pages/products/1'>Product 1</Link>
        </li>
        <li>
          <Link href='/pages/products/2'>Product 2</Link>
        </li>
        <li>
          <Link href='/pages/products/3' replace>
            Product 3
          </Link>
        </li>
        <li>
          <Link href='/pages/products/4'>Product 4</Link>
        </li>
        <li>
          <Link href={`/pages/products/${productId}`}>Product {productId}</Link>
        </li>
      </ul>
    </>
  );
}
