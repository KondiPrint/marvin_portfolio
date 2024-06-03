export async function getData(id) {
  console.log('#1 TodoEdit: Fetching data for ID:', id);

  // Ensure that the id is either a string or a number
  if (!(typeof id === 'string' || typeof id === 'number' || typeof id === 'object')) {
    console.error('#2 TodoEdit: Invalid ID type:', typeof id);
    throw new Error(typeof id);
  }

  // Construct the URL with the id
  const url = `http://localhost:3000/api/todos/${id}`;
  console.log('#3 TodoEdit: URL:', url);

  const res = await fetch(url);

  if (!res.ok) {
    const errorMessage = `#4 TodoEdit: Failed to fetch data: ${res.status} ${res.statusText}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  return res.json();
}
