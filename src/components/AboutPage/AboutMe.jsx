import Image from 'next/image';

export default function AboutMeContent() {
  return (
    <>
      <section className='mt-10'>
        <div className='md:max-w-screen-sm md:mx-auto md:p-2 space-y-3 animate-fade-in-left'>
          <div className='md:grid md:grid-cols-2 md:place-items-center space-y-3'>
            <Image
              src='/assets/img/Martin_cropped.jpg'
              alt='Martin Kannegaard Nielsen'
              className='mask mask-decagon md:mask-squircle size-48 object-cover object-top mx-auto'
              width={400}
              height={400}
            />
            <h1 className='text-3xl font-bold mb-4'>
              Hi there! <span className='inline-block animate-jiggle'>👋</span> I&apos;m Martin
              Kannegaard Nielsen
            </h1>
          </div>
          <article className='md:border-l-4 md:border-primary md:p-4'>
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
          </article>
        </div>
        <aside className='mt-20'>
          <div className='divider divider-secondary text-2xl '>
            <h2 className='text-3xl font-bold'>Let&apos;s connect!</h2>
          </div>
          <div className='md:max-w-screen-sm md:mx-auto md:p-2 animate-fade-in-left'>
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
          </div>
        </aside>
      </section>
    </>
  );
}
