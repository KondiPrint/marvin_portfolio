import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';

export default function HomeSkills() {
  return (
    <>
      <section id='skills' className='my-20 animate-fade-in snap-always snap-start'>
        <div className='divider divider-secondary my-10 text-xl'>
          <h2 className='text-3xl font-bold text-center'>My Skills</h2>
        </div>
        <div className='flex flex-wrap justify-center justify-items-center gap-3 sm:gap-0'>
          <div
            className='card w-fit bg-base-100 shadow-xl tooltip tooltip-bottom'
            data-tip='Very proficient in HTML5'>
            <div className='card-body items-center'>
              <FaHtml5 className='text-6xl text-orange-600' />
              <p className='mt-2'>HTML5</p>
              <progress className='progress progress-success w-20' value='90' max='100'></progress>
            </div>
          </div>
          <div
            className='card w-fit bg-base-100 shadow-xl tooltip tooltip-bottom'
            data-tip='Very proficent in CSS3'>
            <div className='card-body items-center'>
              <FaCss3Alt className='text-6xl text-blue-600' />
              <p className='mt-2'>CSS3</p>
              <progress className='progress progress-success w-20' value='85' max='100'></progress>
            </div>
          </div>
          <div
            className='card w-fit bg-base-100 shadow-xl tooltip tooltip-bottom'
            data-tip='Still alot to learn about Javascript'>
            <div className='card-body items-center'>
              <FaJs className='text-6xl text-yellow-500' />
              <p className='mt-2'>JavaScript</p>
              <progress className='progress progress-warning w-20' value='45' max='100'></progress>
            </div>
          </div>
          <div
            className='card w-fit bg-base-100 shadow-xl tooltip tooltip-bottom'
            data-tip='Getting better at React, Next.js'>
            <div className='card-body items-center'>
              <FaReact className='text-6xl text-cyan-500' />
              <p className='mt-2'>React</p>
              <progress className='progress progress-success w-20' value='60' max='100'></progress>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
