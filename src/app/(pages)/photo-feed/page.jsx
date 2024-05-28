import Link from 'next/link';
import wonders from './wonders';
import Image from 'next/image';

export default function PhotoFeed() {
  return (
    <>
      <h1 className='text-center text-3xl font-bold my-4'>New Wonders of the World</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {wonders.map((p, index) => (
          <Link key={p.id} href={`/pages/photo-feed/${p.id}`}>
            <Image
              alt={`Image of ${p.name}`}
              src={p.src}
              width={400}
              height={400}
              className='w-full object-cover aspect-square'
            />
          </Link>
        ))}
      </div>
    </>
  );
}
