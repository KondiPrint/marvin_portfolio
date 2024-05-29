import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';

export default function HomeContact() {
  return (
    <>
      <section id='contact' className='my-20 animate-fade-in'>
        <div className='divider divider-secondary my-10 text-xl'>
          <h2 className='text-3xl font-bold text-center'>Get In Touch</h2>
        </div>
        <div className='md:max-w-screen-sm md:mx-auto md:text-center'>
          <div className='space-y-4 p-4'>
            <p>
              I&apos;d love to hear from you! Whether it&apos;s a project, job opportunity, or just
              a chat, feel free to reach out.
            </p>
            <div className='flex flex-col items-center'>
              <Link
                href='/contact'
                className='text-base text-base-100 btn btn-lg btn-block sm:btn-wide sm:btn-md btn-secondary mb-4 hover:animate-heartbeat'>
                Email Me <FaArrowRightLong className='size-4' />
              </Link>
              <p className='text-sm'>
                or call me at <span className='font-semibold tracking-widest'>+45 22866141</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
