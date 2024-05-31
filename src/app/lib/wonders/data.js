import jWonders from './wonders.json';

export const getWonders = () => jWonders?.wonders;

export const getById = (id) => {
  console.log('Fetching data for ID:', id); // Log the id being fetched
  const wonder = jWonders?.wonders.find((wonder) => wonder.id === Number(id));
  console.log('Data fetched:', wonder); // Log the fetched data
  return wonder;
};
