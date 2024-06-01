import { getTodos } from '@/app/api/lib/todos';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const todos = await getTodos();
    return NextResponse.json({ message: 'OK', todos }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 });
  }
};
