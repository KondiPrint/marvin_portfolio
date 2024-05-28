import Link from 'next/link';
import Image from 'next/image';

export default function HomeAbout() {
  return (
    <>
      <div id='about' className='mb-5'></div>
      <section className='animate-fade-in'>
        <div className='container mx-auto'>
          <div className='divider divider-secondary my-10 text-xl'>
            <h2 className='text-3xl font-bold text-center '>About Me</h2>
          </div>

          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2'>
              <Image
                src='https://unsplash.it/400'
                width={400}
                height={400}
                alt='Martin K. Nielsen'
                className='rounded-bl-3xl rounded-tr-3xl rounded-tl-md rounded-br-md shadow-lg w-full h-auto'
              />
            </div>
            <div className='md:w-1/2 md:pl-10 mt-8 md:mt-0'>
              <p className='mb-4'>
                I&apos;m a frontend web developer with a passion for creating dynamic and responsive
                web applications. Currently studying web development at a vocational school in
                Aarhus/Grenaa, and I specialize in frontend development with Next.js.
              </p>
              <p className='mb-4'>
                I enjoy playing video games and working out in my free time. I believe in continuous
                learning and personal growth, and I&apos;m committed to delivering high-quality work
                in all my projects.
              </p>
              <div className=''>
                <Link
                  href='/about'
                  className='text-base text-base-100 btn btn-sm btn-secondary hover:animate-heartbeat'>
                  Read More -&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
