import Link from 'next/link';

export default function HomeContact() {
  return (
    <>
      <section id='contact' className='my-20 animate-fade-in'>
        <div className='container mx-auto'>
          <div className='divider divider-secondary my-10 text-xl'>
            <h2 className='text-3xl font-bold text-center'>Get In Touch</h2>
          </div>

          <div className=''>
            <p className='mb-4'>
              I&apos;d love to hear from you! Whether it&apos;s a project, job opportunity, or just a chat, feel free to reach out.
            </p>
            <div className=''>
              <Link href='/pages/contact' className='text-base text-base-100 btn btn-sm btn-accent mb-4 hover:animate-heartbeat'>
                Email Me -&gt;
              </Link>
            </div>
            <p className='text-sm'>
              or call me at <span className='font-semibold tracking-widest'>+45 22866141</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
