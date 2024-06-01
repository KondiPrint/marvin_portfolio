'use client';

import { useState, useEffect } from 'react';
import { deleteTodoById } from '@/app/lib/todos/data';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function TodosCards({ data }) {
  const [todos, setTodos] = useState(data.todos || []);

  useEffect(() => {
    setTodos(data.todos || []);
  }, [data]);

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

  return (
    <>
      <section className='grid sm:grid-cols-3'>
        {todos.map((t) => (
          <div key={t._id} className='card w-auto bg-base-100 shadow-xl'>
            <figure className='px-10 pt-10'>
              <Image
                src={
                  t.image ||
                  'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
                }
                width={928}
                height={548}
                alt={t.title}
                className='rounded-xl h-full w-full'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>{t.title}</h2>
              <p>{t.description}</p>
              <div className='card-actions join gap-0'>
                <Link
                  href={{ pathname: `/todos/todosedit/`, query: { id: t._id } }}
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

        <div className='card w-auto bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <div className='skeleton w-full h-52'></div>
          </figure>
          <div className='card-body items-center text-center'>
            <div className='card-title skeleton h-4 w-28'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='skeleton h-4 w-full'></div>
            <div className='card-actions pt-2'>
              <Link
                href='/todos/todosadd'
                className='btn btn-wide btn-primary hover:animate-heartbeat'>
                <FaPlus size='1.5em' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
