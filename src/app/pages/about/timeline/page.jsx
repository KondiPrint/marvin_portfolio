'use client';
import { useRouter } from 'next/navigation';
import AboutMeTimeline from '@/components/AboutPage/Timeline';

export default function AboutTimeline() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <>
      <AboutMeTimeline />

      <button onClick={handleClick} className='text-base text-base-100 btn btn-sm btn-primary hover:animate-heartbeat'>
        &lt;- Back
      </button>
    </>
  );
}
