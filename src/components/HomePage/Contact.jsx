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
        <div className='sm:max-w-screen-sm sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-3 items-center p-4'>
          <figure className='order-last mb-4'>
            <Image
              src='/assets/img/VZb7gZb2.jpg'
              width={400}
              height={400}
              alt='Martin K. Nielsen'
              className='rounded-br-3xl rounded-tl-3xl rounded-tr-sm rounded-bl-sm shadow-2xl w-full h-auto cover'
            />
          </figure>
          <div className='space-y-4'>
            <p>
              I&apos;d love to hear from you! Whether it&apos;s a project, job opportunity, or just
              a chat, feel free to reach out.
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
