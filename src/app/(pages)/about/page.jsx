'use client';
import AboutMeContent from '@/components/AboutPage/AboutMe';
import { useRouter } from 'next/navigation';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about/timeline');
  };
  return (
    <>
      <AboutMeContent />
      <div className='p-4 animate-fade-in flex justify-end w-full'>
        <button
          onClick={handleClick}
          className='text-base text-base-100 btn btn-md btn-primary hover:animate-heartbeat group'>
          My timeline <FaArrowRightLong className='size-4 group-hover:animate-slide-out-right' />
        </button>
      </div>
    </>
  );
}
