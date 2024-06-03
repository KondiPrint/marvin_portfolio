import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeContact() {
  return (
    <>
      <section id='contact' className='my-20 animate-fade-in'>
        <div className='divider divider-secondary my-10 text-xl'>
          <h2 className='text-3xl font-bold text-center'>Get In Touch</h2>
        </div>
        <div className='sm:max-w-screen-sm sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-3 items-center p-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
          <figure className='order-last mb-4'>
            <Image
              src='/assets/img/gjmlKHpe.jpg'
              width={400}
              height={400}
              alt='Martin K. Nielsen'
              className='rounded-br-3xl rounded-tl-3xl rounded-tr-sm rounded-bl-sm shadow-2xl w-full h-auto cover'
            />
          </figure>
          <div className='space-y-4'>
            <p>
              I&apos;m excited to connect! Whether it&apos;s about a project, a job opportunity, or
              just a friendly chat, feel free to reach out.
            </p>
            <div className='flex flex-col items-center nav'>
              <Link
                href='/contact'
                className='text-base text-base-100 btn btn-lg btn-block sm:btn-md btn-secondary mb-4 hover:animate-heartbeat group'>
                Email Me <FaArrowRightLong className='size-4 group-hover:animate-slide-out-right' />
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
