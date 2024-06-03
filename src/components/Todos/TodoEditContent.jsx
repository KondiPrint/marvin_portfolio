'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TodoEditContent({ data, dataCat }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [tCat, setTCat] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (data) {
      setTitle(data.todo.todo.title);
      setDescription(data.todo.todo.description);
      setTCat(data.todo.todo.category._id);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTodo = {
      title,
      description,
      image: img,
      category: tCat,
    };

    try {
      const res = await fetch(
        `https://server-api-mongodb-1wka.onrender.com/todos/${data.todo.todo._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTodo),
        }
      );

      if (!res.ok) {
        throw new Error('Failed to update todo');
      }

      setTitle('');
      setDescription('');
      setImg('');
      setTCat('');
      setErrorMessage('');
      setMessage('Todo updated successfully');
    } catch (error) {
      console.error('Error updating todo:', error);
      setErrorMessage(`${error}`);
      setMessage('');
    }
  };

  const todo = data.todo.todo;

  return (
    <>
      <section className='animate-fade-in mt-20 mb-10'>
        <div className='px-4'>
          {errorMessage && (
            <div role='alert' className='alert alert-error mb-10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='stroke-current shrink-0 size-10'
                fill='none'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}
          {message && (
            <div role='alert' className='alert alert-success mb-10'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='stroke-current shrink-0 size-10'
                fill='none'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <span>{message}</span>
            </div>
          )}
          <form noValidate onSubmit={handleSubmit} className='space-y-10 form-control'>
            <div className='relative indicator w-full'>
              <input
                type='text'
                name='title'
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder=' '
                className='input input-bordered peer focus:outline-none focus:border-primary w-full'
              />
              <label
                htmlFor='title'
                className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-6 peer-focus:left-1 peer-valid:-top-6 peer-valid:left-1'>
                Title:
              </label>
              <span className='indicator-item indicator-center badge peer-focus:hidden'>
                Required
              </span>
            </div>

            <div className='relative indicator w-full'>
              <textarea
                name='description'
                id='description'
                rows='4'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder=' '
                className='textarea textarea-bordered peer focus:outline-none focus:border-primary w-full'></textarea>
              <label
                htmlFor='description'
                className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-6 peer-focus:left-1 peer-valid:-top-6 peer-valid:left-1'>
                Message:
              </label>
              <span className='indicator-item indicator-center badge peer-focus:hidden'>
                Required
              </span>
            </div>

            <div className='relative indicator w-full'>
              {dataCat && (
                <select
                  name='category'
                  id='category'
                  className='select select-bordered peer focus:outline-none focus:border-primary w-full'
                  onChange={(e) => setTCat(e.target.value)}
                  value={tCat}>
                  <option disabled value='' hidden></option>
                  {dataCat.categories.map((c) => (
                    <option value={c._id} key={c._id}>
                      {c.category}
                    </option>
                  ))}
                </select>
              )}
              <label
                htmlFor='category'
                className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-6 peer-focus:left-1 peer-valid:-top-6 peer-valid:left-1'>
                Category:
              </label>
              <span className='indicator-item indicator-center badge peer-focus:hidden'>
                Required
              </span>
            </div>

            <div className='relative indicator w-full'>
              <input
                className='input input-bordered peer focus:outline-none focus:border-primary w-full'
                type='text'
                placeholder=' '
                name='myImage'
                id='myImage'
                value={img}
                accept='image/*'
                onChange={(e) => setImg(e.target.value)}
              />
              <label
                htmlFor='myImage'
                className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-6 peer-focus:left-1 peer-[:not(placeholder-shown)]:-top-6 peer-[:not(placeholder-shown)]:left-1 peer-placeholder-shown:left-3 peer-placeholder-shown:top-3'>
                Image:
              </label>
            </div>

            <div className='text-center flex join w-full'>
              <Link
                href='/todos'
                className='btn join-item btn-primary text-current w-1/3 hover:animate-heartbeat'>
                ← Back
              </Link>
              <button
                type='submit'
                className='join-item text-current btn btn-success w-2/3 hover:animate-heartbeat'>
                Finalise
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
