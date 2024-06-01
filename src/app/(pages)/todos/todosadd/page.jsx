import { getData } from './data';

const TodoAdd = async (id) => {
  const dataId = id.searchParams.id;

  return (
    <>
      <h1>Here is a place you can add todos!</h1>
    </>
  );
};

export default TodoAdd;
