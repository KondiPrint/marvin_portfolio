import { getTodos, getCategories } from '@/app/dataFetch/todos/todosData';
import TodoAddContent from '@/components/Todos/TodoAddContent';

const TodoAdd = async () => {
  const data = await getTodos();
  const dataCat = await getCategories();

  return (
    <>
      <TodoAddContent data={data} dataCat={dataCat} />
    </>
  );
};

export default TodoAdd;
