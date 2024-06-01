const API_URL = 'https://server-api-mongodb-1wka.onrender.com/todos';

export const getTodos = async () => {
  try {
    const res = await fetch(API_URL);
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

    const res = await fetch(`${API_URL}/${id}`);
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

export const deleteTodoById = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error('#7 Lib Todos: Failed to delete todo');
    }

    return true;
  } catch (error) {
    console.error('#8 Lib Todos: Error deleting todo:', error);
    return false;
  }
};
