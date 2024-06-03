import { getTodoById, deleteTodoById, updateTodoById } from '@/app/lib/todos/data';
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
  try {
    const id = route.params.id;
    console.log(`#5 Todos [id]: Deleting to do with: ${id}`);
    const todo = await getTodoById(id);

    if (!todo) {
      console.log(`#6 Todos [id]: Todo not found for id: ${id}`);
      return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
    }

    await deleteTodoById(id);
    console.error('#7 Todos [id]: Todo deleted');
    return NextResponse.json({ message: 'Todo deleted' }, { status: 200 });
  } catch (err) {
    console.error('#8 Todos [id]: Error deleting todo:', err);

    return NextResponse.json({ message: 'Error deleting todo', err }, { status: 500 });
  }
};

export const PUT = async (req, route) => {
  try {
    const id = route.params.id;
    const todoData = await req.json();
    console.log(`#9 Todos [id]: Updating todo with id: ${id}`); // Log the id being updated

    const success = await updateTodoById(id, todoData);
    if (success) {
      return NextResponse.json({ message: 'Todo updated successfully' }, { status: 200 });
    } else {
      throw new Error('Failed to update todo');
    }
  } catch (err) {
    console.error('#10 Todos [id]: Error updating todo:', err);
    return NextResponse.json({ message: 'Error updating todo', err }, { status: 500 });
  }
};
