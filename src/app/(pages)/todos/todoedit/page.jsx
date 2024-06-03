import { getData } from './data';
import { getCategories } from '@/app/dataFetch/todos/todosData';
import TodoEditContent from '@/components/Todos/TodoEditContent';

const TodoEdit = async (id) => {
  const dataId = id.searchParams.id;
  const data = await getData(dataId);
  const dataCat = await getCategories();

  console.log(data);

  const todo = data.todo.todo;

  return (
    <>
      <div className='divider divider-primary mt-16 text-xl'>
        <h1 className='text-3xl font-bold text-center'>
          Update <br /> {todo.title}
        </h1>
      </div>
      <TodoEditContent data={data} dataCat={dataCat} dataId={id} />
    </>
  );
};

export default TodoEdit;
