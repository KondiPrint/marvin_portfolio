export default function AboutMeTimeline() {
  return (
    <>
      <div className='divider divider-secondary my-10 text-xl'>
        <h2 className='text-3xl font-bold text-center '>Timeline</h2>
      </div>
      <section className='px-4'>
        <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical animate-fade-in-left'>
          <li>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='size-5 fill-secondary'>
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end md:timeline-start md:text-end mb-10'>
              <time className='font-mono italic text-secondary'>2010-2012</time>
              <div className='text-lg font-black'>Coop - Service worker</div>
              <p>I worked in the Fruit & Green department at Kvickly, as a youth worker.</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='size-5 fill-secondary'>
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end mb-10'>
              <time className='font-mono italic text-secondary'>2014-2015</time>
              <div className='text-lg font-black'>Central Jutland region - Temp worker</div>
              <p>
                I stopped working at the Temp Office at Aarhus University Hospital Nørrebrogade in
                January because I had to complete my enlistment.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='size-5 fill-secondary'>
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end md:timeline-start md:text-end mb-10'>
              <time className='font-mono italic text-secondary'>2015</time>
              <div className='text-lg font-black'>Armed Forces - Private</div>
              Conscription in the Danish Armed Forces at Nørresundby barracks as a private. The
              conscription period is four months in Denmark.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='size-5 fill-secondary'>
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end mb-10'>
              <time className='font-mono italic text-secondary'>2012-2018</time>
              <div className='text-lg font-black'>Central Jutland region - Kitchen Assistant</div>
              <p>
                I worked in the kitchen when Aarhus University Hospital was still at Nørrebrogade,
                where I jumped between the kitchen and the Temp office. At the Temp office I worked
                as a food delivery driver inside the hospital. There are small gaps where I did not
                work between 2012-2018.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='size-5 fill-secondary'>
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end md:timeline-start md:text-end'>
              <time className='font-mono italic text-secondary'>2018-2020</time>
              <div className='text-lg font-black'>
                Central Jutland region - Unskilled service worker
              </div>
              <p>
                I started out as a postal worker at Skejby University Hospital, and was later taught
                to work in the Logistics Department. In which I had tasks such as; waste removal,
                changing risk bins, delivering food, etc. I ended up alternating between the two.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
