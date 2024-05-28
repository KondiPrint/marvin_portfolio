import Image from 'next/image';
import wondersImages from '../wonders';

export default function PhotoPage({ params: { id } }) {
  const photo = wondersImages.find((p) => p.id === id);
  return (
    <div className=''>
      <div className=''>
        <div>
          <h1 className='text-center text-3xl font-bold my-4'>{photo.name}</h1>
        </div>
        <Image
          alt={`Image of ${photo.name}`}
          src={photo.src}
          className='w-full object-cover aspect-square '
        />
        <div className=''>
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </div>
  );
}
