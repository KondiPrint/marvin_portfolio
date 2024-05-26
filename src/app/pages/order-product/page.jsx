'use client';

import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing your order');
    router.push('/');
    /* router.back(); */
    /* router.replace('/'); */
    /* router.forward(); */
  };

  return (
    <>
      <h1>Order product</h1>
      <button className='btn' onClick={handleClick}>
        Place order
      </button>
    </>
  );
}
