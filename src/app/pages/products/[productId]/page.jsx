import { metadata } from 'next';

export const generateMetadata = async ({ params }) => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

export default function ProductsDetails({ params }) {
  return <h1>Details about product {params.productId}</h1>;
}
