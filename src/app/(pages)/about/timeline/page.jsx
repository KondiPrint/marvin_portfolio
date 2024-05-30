'use client';
import { useRouter } from 'next/navigation';
import AboutMeTimeline from '@/components/AboutPage/Timeline';
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function AboutTimeline() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <>
      <AboutMeTimeline />
      <div className='p-4 animate-fade-in'>
        <button
          onClick={handleClick}
          className='text-base text-base-100 btn btn-md btn-primary hover:animate-heartbeat group'>
          <FaArrowLeftLong className='size-4 group-hover:animate-slide-out-left' /> Back
        </button>
      </div>
    </>
  );
}
