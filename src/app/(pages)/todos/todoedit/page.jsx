import { getData } from './data';

const TodoEdit = async (id) => {
  const dataId = id.searchParams.id;

  return (
    <>
      <h1>Here is a place you can edit todos!</h1>
    </>
  );
};

export default TodoEdit;
