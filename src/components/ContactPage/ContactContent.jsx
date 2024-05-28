export default function ContactContent() {
  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen animate-fade-in'>
        <div className='max-w-2xl w-full md:p-10'>
          <div className='divider divider-primary my-10 text-xl'>
            <h2 className='text-3xl font-bold text-center'>Get In Touch</h2>
          </div>
          <p className='mb-10 text-center'>
            I&apos;d love to hear from you! Whether it&apos;s a project, job opportunity, or just a chat, feel free to reach out.
          </p>
          <form action='https://formsubmit.co/your-email@example.com' method='POST' className='space-y-8'>
            <input type='hidden' name='_next' value='https://yourdomain.com/thanks' />
            <input type='hidden' name='_subject' value='New submission from contact form!' />
            <div className='relative indicator w-full'>
              <input
                type='text'
                name='name'
                id='name'
                required
                className='input input-bordered peer focus:outline-none focus:border-primary w-full'
              />
              <label htmlFor='name' className='absolute peer-focus:-top-6 peer-focus:left-1 top-3 left-3 transition-all duration-300'>
                Name:
              </label>
              <span className='indicator-item indicator-center badge peer-focus:hidden'>Required</span>
            </div>
            <div className='relative indicator w-full'>
              <input
                type='email'
                name='email'
                id='email'
                required
                className='input input-bordered peer focus:outline-none focus:border-primary w-full'
              />
              <label htmlFor='email' className='absolute peer-focus:-top-6 peer-focus:left-1 top-3 left-3 transition-all duration-300'>
                Email:
              </label>
              <span className='indicator-item indicator-center badge peer-focus:hidden'>Required</span>
            </div>
            <div className='relative indicator w-full'>
              <textarea
                name='message'
                id='message'
                rows='4'
                required
                className='textarea textarea-bordered peer focus:outline-none focus:border-primary w-full'></textarea>
              <label htmlFor='message' className='absolute peer-focus:-top-6 peer-focus:left-1 top-3 left-3 transition-all duration-300'>
                Message:
              </label>
              <span className='indicator-item indicator-center badge peer-focus:hidden'>Required</span>
            </div>
            <div className='text-center'>
              <button type='submit' className='text-base text-base-100 btn btn-sm btn-primary w-full md:w-auto hover:animate-heartbeat'>
                Send Message
              </button>
            </div>
          </form>
          <div className='mt-6 text-center'>
            <p>Or reach me directly at:</p>
            <p>
              <a href='mailto:marvin.kn@protonmail.com' className='link link-hover link-primary'>
                marvin.kn@protonmail.com
              </a>
            </p>
            <p className='mt-2'>
              Phone: <span className='font-semibold tracking-widest'>+45 22866141</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}