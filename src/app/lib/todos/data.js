// lib/todos.js

const TODOS_API_URL = 'https://server-api-mongodb-1wka.onrender.com/todos';
const CATEGORIES_API_URL = 'https://server-api-mongodb-1wka.onrender.com/categories';

export const getTodos = async () => {
  try {
    const res = await fetch(TODOS_API_URL);
    if (!res.ok) {
      throw new Error('#1 Lib Todos: Failed to fetch todos');
    }
    const todos = await res.json();
    return todos;
  } catch (error) {
    console.error('#2 Lib Todos: Error fetching todos:', error);
    return [];
  }
};

export const getTodoById = async (id) => {
  try {
    console.log('#3 Lib Todos: Fetching data for ID:', id);

    const res = await fetch(`${TODOS_API_URL}/${id}`);
    if (!res.ok) {
      throw new Error('#4 Lib Todos: Failed to fetch todo');
    }
    const todo = await res.json();

    console.log('#5 Lib Todos: Data fetched:', todo);
    return todo;
  } catch (error) {
    console.error('#6 Lib Todos: Error fetching todo:', error);
    return null;
  }
};

export const postTodo = async (todoData) => {
  try {
    const res = await fetch(`${TODOS_API_URL}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(todoData),
    });
    if (!res.ok) {
      throw new Error('#7 Lib Todos: Failed to post todo');
    }
    return true;
  } catch (error) {
    console.error('#8 Lib Todos: Error posting todo');
    return false;
  }
};

export const updateTodoById = async (id, todoData) => {
  try {
    const res = await fetch(`${TODOS_API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoData),
    });
    if (!res.ok) {
      throw new Error('#13 Lib Todos: Failed to update todo');
    }
    return true;
  } catch (error) {
    console.error('#14 Lib Todos: Error updating todo:', error);
    return false;
  }
};

export const deleteTodoById = async (id) => {
  try {
    const res = await fetch(`${TODOS_API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('#9 Lib Todos: Failed to delete todo');
    }

    return true;
  } catch (error) {
    console.error('#10 Lib Todos: Error deleting todo:', error);
    return false;
  }
};

export const getCategories = async () => {
  try {
    const res = await fetch(CATEGORIES_API_URL);
    if (!res.ok) {
      throw new Error('#11 Lib Categories: Failed to fetch categories');
    }
    const categories = await res.json();
    return categories;
  } catch (error) {
    console.error('#12 Lib Categories: Error fetching categories:', error);
    return [];
  }
};
