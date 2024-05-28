import Image from 'next/image';
import wondersImages from '../../../wonders';
import Modal from '@/components/modal';

export default function PhotoModal({ params: { id } }) {
  const photo = wondersImages.find((p) => p.id === id);

  return (
    <Modal>
      <div className='card bg-base-100 shadow-xl'>
        <figure>
          <Image alt={`Image of ${photo.name}`} src={photo.src} className='aspect-square' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{photo.name}</h2>
          <p>{photo.photographer}</p>
          <p>{photo.location}</p>
        </div>
      </div>
    </Modal>
  );
}
