import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';

export default function HomeSkills() {
  return (
    <>
      <section id='skills' className='my-20 animate-fade-in'>
        <div className='divider divider-secondary my-10 text-xl'>
          <h2 className='text-3xl font-bold text-center'>My Skills</h2>
        </div>
        <div className='flex flex-wrap justify-center gap-10 text-center'>
          <div className='skill-card'>
            <FaHtml5 className='text-6xl text-orange-600' />
            <p className='mt-2'>HTML5</p>
          </div>
          <div className='skill-card'>
            <FaCss3Alt className='text-6xl text-blue-600' />
            <p className='mt-2'>CSS3</p>
          </div>
          <div className='skill-card'>
            <FaJs className='text-6xl text-yellow-500' />
            <p className='mt-2'>JavaScript</p>
          </div>
          <div className='skill-card'>
            <FaReact className='text-6xl text-cyan-500' />
            <p className='mt-2'>React</p>
          </div>
          <div className='skill-card'>
            <FaNodeJs className='text-6xl text-green-600' />
            <p className='mt-2'>Node.js</p>
          </div>
        </div>
      </section>
    </>
  );
}
