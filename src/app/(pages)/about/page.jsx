'use client';
import AboutMeContent from '@/components/AboutPage/AboutMe';
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about/timeline');
  };
  return (
    <>
      <AboutMeContent />
      <div>
        <button
          onClick={handleClick}
          className='text-base text-base-100 btn btn-sm btn-primary mt-10 hover:animate-heartbeat'>
          My timeline -&gt;
        </button>
      </div>
    </>
  );
}
