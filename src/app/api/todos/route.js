import { getTodos, postTodo, getCategories } from '@/app/api/lib/todos';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const todos = await getTodos();
    return NextResponse.json({ message: 'OK', todos }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    const todoData = await req.json();

    // Fetch categories
    const categories = await getCategories();

    // Handle adding the new todo with category data
    const success = await postTodo(todoData, categories);

    if (success) {
      return NextResponse.json({ message: 'Todo added successfully' }, { status: 201 });
    } else {
      throw new Error('Failed to add todo');
    }
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};
