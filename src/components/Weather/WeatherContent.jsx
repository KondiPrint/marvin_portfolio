'use client';

import React from 'react';

export default function WeatherContent() {
  const clickEvent = () => {
    document.getElementById('my_modal_2').showModal();
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className='btn' onClick={clickEvent}>
        open modal
      </button>
      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
          </form>
          <h3 className='font-bold text-lg'>Hello!</h3>
          <p className='py-4'>Press ESC key or click outside to close</p>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>

      <article className='mx-auto px-4'>
        <div className='join join-vertical w-full'>
          <div className='collapse collapse-arrow join-item border border-base-content hover:ring-4 hover:ring-inset hover:ring-red-600'>
            <input type='radio' name='my-accordion-4' defaultChecked />
            <div className='collapse-title text-xl font-medium grid grid-cols-3'>
              <div>
                <div>Date</div>
                <div>1.1</div>
              </div>
              <div>
                <div>Sunrise</div>
                <div>2.2</div>
              </div>
              <div>
                <div>Sunset</div>

                <div>3.3</div>
              </div>
            </div>
            <div className='collapse-content grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5'>
              <div>
                <p>hello1</p>
                <p>hello1.1</p>
              </div>
              <div>
                <p>hello2</p>
                <p>hello2.2</p>
              </div>
              <div>
                <p>hello3</p>
                <p>hello3.3</p>
              </div>
              <div>
                <p>hello4</p>
                <p>hello4.4</p>
              </div>
              <div>
                <p>hello5</p>
                <p>hello5.5</p>
              </div>
              <div>
                <p>hello6</p>
                <p>hello6.6</p>
              </div>
            </div>
          </div>
          <div className='collapse collapse-arrow join-item border border-base-content hover:ring-4 hover:ring-inset hover:ring-red-600'>
            <input type='radio' name='my-accordion-4' />
            <div className='collapse-title text-xl font-medium grid grid-cols-3'>
              <div>
                <div>Date</div>
                <div>1.1</div>
              </div>
              <div>
                <div>Sunrise</div>
                <div>2.2</div>
              </div>
              <div>
                <div>Sunset</div>

                <div>3.3</div>
              </div>
            </div>
            <div className='collapse-content grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5'>
              <div>
                <p>hello1</p>
                <p>hello1.1</p>
              </div>
              <div>
                <p>hello2</p>
                <p>hello2.2</p>
              </div>
              <div>
                <p>hello3</p>
                <p>hello3.3</p>
              </div>
              <div>
                <p>hello4</p>
                <p>hello4.4</p>
              </div>
              <div>
                <p>hello5</p>
                <p>hello5.5</p>
              </div>
              <div>
                <p>hello6</p>
                <p>hello6.6</p>
              </div>
            </div>
          </div>
          <div className='collapse collapse-arrow join-item border border-base-content hover:ring-4 hover:ring-inset hover:ring-red-600'>
            <input type='radio' name='my-accordion-4' />
            <div className='collapse-title text-xl font-medium grid grid-cols-3'>
              <div>
                <div>Date</div>
                <div>1.1</div>
              </div>
              <div>
                <div>Sunrise</div>
                <div>2.2</div>
              </div>
              <div>
                <div>Sunset</div>

                <div>3.3</div>
              </div>
            </div>
            <div className='collapse-content grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5'>
              <div>
                <p>hello1</p>
                <p>hello1.1</p>
              </div>
              <div>
                <p>hello2</p>
                <p>hello2.2</p>
              </div>
              <div>
                <p>hello3</p>
                <p>hello3.3</p>
              </div>
              <div>
                <p>hello4</p>
                <p>hello4.4</p>
              </div>
              <div>
                <p>hello5</p>
                <p>hello5.5</p>
              </div>
              <div>
                <p>hello6</p>
                <p>hello6.6</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
