export async function getTodos() {
  const res = await fetch('https://server-api-mongodb-1wka.onrender.com/todos');
  if (!res.ok) {
    throw new Error('#1 dataFetch Todos: Failed to fetch data');
  }
  return res.json();
}

export async function getCategories() {
  const res = await fetch('https://server-api-mongodb-1wka.onrender.com/categories');
  if (!res.ok) {
    throw new Error('#2 dataFetch Todos: Failed to fetch data');
  }
  return res.json();
}
