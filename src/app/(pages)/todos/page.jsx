import { getTodos } from '@/app/dataFetch/todos/todosData';
import TodosCards from '@/components/Todos/TodosCard';

export default async function Todos() {
  const data = await getTodos();

  return (
    <>
      <TodosCards data={data} />
    </>
  );
}
