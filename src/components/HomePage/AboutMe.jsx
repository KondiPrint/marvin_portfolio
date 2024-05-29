import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeAbout() {
  return (
    <>
      <div id='about' className=''></div>
      <section className='animate-fade-in'>
        <div className='divider divider-secondary mt-10 text-xl'>
          <h2 className='text-3xl font-bold text-center '>About Me</h2>
        </div>
        <article className='p-4 space-y-2 sm:max-w-screen-sm sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-3'>
          <figure className=''>
            <Image
              src='https://unsplash.it/400'
              width={400}
              height={400}
              alt='Martin K. Nielsen'
              className='rounded-bl-3xl rounded-tr-3xl rounded-tl-sm rounded-br-sm shadow-lg w-full h-auto'
            />
          </figure>
          <div className='space-y-4'>
            <p>
              I&apos;m a frontend web developer with a passion for creating dynamic and responsive
              web applications. Currently studying web development at a vocational school in
              Aarhus/Grenaa, and I specialize in frontend development with Next.js.
            </p>
            <p>
              I enjoy playing video games and working out in my free time. I believe in continuous
              learning and personal growth, and I&apos;m committed to delivering high-quality work
              in all my projects.
            </p>
            <div className='flex justify-center'>
              <Link
                href='/about'
                className='text-base text-base-100 btn btn-lg btn-block sm:btn-md btn-secondary hover:animate-heartbeat'>
                Read More <FaArrowRightLong className='size-4' />
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
