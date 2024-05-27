import Image from 'next/image';

export default function AboutMeContent() {
  return (
    <>
      <section className='flex justify-center items-center min-h-screen animate-fade-in'>
        <div className='max-w-4xl flex flex-col md:flex-row'>
          <div className='flex justify-center md:justify-start md:pr-6'>
            <Image
              src='/assets/img/Martin_cropped.jpg'
              alt='Martin Kannegaard Nielsen'
              className='mask mask-decagon size-48 object-cover object-top'
              width={400}
              height={400}
            />
          </div>
          <article className='mt-6 md:mt-0 md:pl-6'>
            <h1 className='text-3xl font-bold mb-4'>
              Hi there! <span className='inline-block animate-jiggle'>👋</span> I&apos;m Martin
              Kannegaard Nielsen
            </h1>
            <p className='mb-4'>
              I&apos;m a <span className='font-semibold'>frontend web developer</span> with a
              passion for creating dynamic and responsive web applications. With a solid foundation
              in web development, I&apos;ve had the opportunity to work on various projects that
              showcase my skills and dedication.
            </p>
            <p className='mb-4'>
              I hold a degree in web development from a vocational school in Aarhus/Grenaa, where I
              developed a strong foundation in frontend technologies. Throughout my studies,
              I&apos;ve specialized in{' '}
              <span className='font-semibold'>frontend development with Next.js</span> and have a
              knack for creating clean and efficient code.
            </p>
            <p className='mb-4'>
              When I&apos;m not coding, you can find me{' '}
              <span className='font-semibold'>playing video games and working out</span>. I believe
              in continuous learning and personal growth, and I&apos;m committed to delivering
              high-quality work in all my projects.
            </p>
            <p className='mb-4'>
              Looking ahead, I&apos;m excited to finish my studies this September and begin my
              professional journey in the web development industry. Whether it&apos;s working on
              innovative projects or tackling new challenges, I&apos;m always eager to make a
              meaningful impact.
            </p>
            <div className='divider divider-secondary my-10 text-2xl'>
              <h2 className='text-3xl font-bold'>Let&apos;s connect!</h2>
            </div>
            <p className='text-lg mt-6 text-center'></p>
            <p className='text-lg mt-6'>
              Feel free to reach out to me at{' '}
              <a href='mailto:marvin.kn@protonmail.com' className='link link-hover link-secondary'>
                marvin.kn@protonmail.com
              </a>{' '}
              or connect with me on{' '}
              <a
                href='https://www.linkedin.com/in/martin-nielsen-b483a72b6/'
                className='link link-hover link-secondary'>
                LinkedIn
              </a>
              . I&apos;d love to chat about web development or discuss potential collaborations.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
