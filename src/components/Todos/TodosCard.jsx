'use client';

import { useState } from 'react';
import { deleteTodoById } from '@/app/lib/todos/data';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import AmountPerSite from '../Pagination/AmountPerSite';
import PrevNext from '../Pagination/Prev_Next';
import Link from 'next/link';
import Image from 'next/image';

export default function TodosCards({ data }) {
  const [amountPerSite, setAmountPerSite] = useState(5);
  const [currentSite, setCurrentSite] = useState(0);
  const [todos, setTodos] = useState(data?.todos || []);

  const sliceData = (dataToSlice) => {
    return dataToSlice.slice(
      currentSite * amountPerSite,
      currentSite * amountPerSite + amountPerSite
    );
  };

  const handleDelete = async (todoID, todoName) => {
    if (window.confirm(`Are you sure you want to delete: ${todoName}?`)) {
      try {
        const success = await deleteTodoById(todoID);
        if (success) {
          setTodos(todos.filter((todo) => todo._id !== todoID));
        } else {
          console.error('Failed to delete todo');
        }
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
  };

  const getDefaultImage = (category) => {
    switch (category.toLowerCase()) {
      case 'chores':
        return '/assets/img/chores.jpg';
      case 'hobby':
        return '/assets/img/hobbies.jpg';
      case 'school':
        return '/assets/img/school.jpg';
      case 'work':
        return '/assets/img/work.jpg';
      default:
        return '/assets/img/office-3199438_960_720.jpg';
    }
  };

  let dataLength = todos.length;

  return (
    <>
      <div className='divider divider-primary mt-10 text-xl'>
        <h1 className='text-3xl font-bold text-center'>Todos</h1>
      </div>

      <aside className='flex flex-col gap-5 mb-10 px-4'>
        <AmountPerSite setAmountPerSite={setAmountPerSite} setCurrentSite={setCurrentSite} />

        <Link
          href='/todos/todosadd'
          className='text-current btn btn-lg sm:btn-block btn-primary hover:animate-heartbeat'>
          <FaPlus size='1.5em' />
        </Link>
      </aside>

      <section className='grid sm:grid-cols-3 gap-5 px-4'>
        {sliceData(todos).map((t) => (
          <div key={t._id} className='card card-compact w-auto bg-base-100 shadow-2xl'>
            <figure className='relative'>
              <Image
                src={t.image || getDefaultImage(t.category.category)}
                width={600}
                height={600}
                alt={t.title}
                className='h-full w-full'
              />
              <div className='badge badge-secondary text-current absolute top-0 left-0 rounded-t-none rounded-l-none rounded-br-2xl p-3'>
                {t.category.category}
              </div>
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>{t.title}</h2>
              <p>{t.description}</p>
              <div className='card-actions join gap-0'>
                <Link
                  href={{ pathname: `/todos/todoedit/`, query: { id: t._id } }}
                  className='btn join-item btn-success hover:animate-heartbeat'>
                  <FaEdit size='2em' />
                </Link>
                <div
                  className='btn join-item btn-error hover:animate-heartbeat'
                  onClick={() => handleDelete(t._id, t.title)}>
                  <FaTrash size='2em' />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className='card card-compact w-auto bg-base-100 shadow-2xl'>
          <figure>
            <div className='skeleton rounded-b-none w-full h-48'></div>
          </figure>
          <div className='card-body items-center text-center'>
            <div className='card-title skeleton h-4 w-28'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='card-actions pt-2 w-full'>
              <Link
                href='/todos/todosadd'
                className='text-current btn btn-block btn-primary hover:animate-heartbeat'>
                <FaPlus size='1.5em' />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PrevNext
        setCurrentSite={setCurrentSite}
        currentSite={currentSite}
        dataLength={dataLength}
        amountPerSite={amountPerSite}
        data={todos}
      />
      <span className='flex justify-center mt-5 md:mt-10'></span>
    </>
  );
}
