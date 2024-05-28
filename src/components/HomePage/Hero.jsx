import Link from 'next/link';

export default function HomeHero() {
  return (
    <>
      <section className='hero min-h-screen animate-fade-in-left'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold'>Hi, I&apos;m Martin K. Nielsen</h1>

            <p className='relative my-6 mx-auto w-max font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-base-100 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-base-content'>
              Hello World
            </p>

            <p className='mb-2'>
              Frontend Developer with a passion for as building beautiful web applications
            </p>

            <Link
              href='#about'
              className='text-base text-base-100 btn btn-sm btn-primary hover:animate-heartbeat'>
              More About Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
