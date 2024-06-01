import { getTodoById, deleteTodoById } from '@/app/api/lib/todos';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req, route) => {
  try {
    const id = route.params.id;
    console.log(`#1 Todos [id]: Fetching todo with id: ${id}`); // Log the id being fetched

    const todo = await getTodoById(id);
    console.log('#2 Todos [id]: Todo fetched:', todo); // Log the fetched todo

    if (!todo) {
      console.error(`#3 Todos [id]: Todo not found for id: ${id}`); // Log when the todo is not found
      return NextResponse.json({ message: 'ERROR', todo }, { status: 404 }); // Not found
    }

    return NextResponse.json({ message: 'OK', todo }, { status: 200 }); // Success
  } catch (err) {
    console.error('#4 Todos [id]: Error fetching todo:', err); // Log any error
    return NextResponse.json({ message: 'ERROR', err }, { status: 500 }); // Internal server error
  }
};

export const DELETE = async (req, route) => {
  const id = route.params.id;

  try {
    const todo = await getTodoById(id);

    if (!todo) {
      return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
    }

    await deleteTodoById(id);
    return NextResponse.json({ message: 'Todo deleted' }, { status: 200 });
  } catch (err) {
    console.error('#5 Todos [id]: Error deleting todo:', err);

    return NextResponse.json({ message: 'Error deleting todo', err }, { status: 500 });
  }
};
