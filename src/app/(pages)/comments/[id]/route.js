import { comments } from '../data';
import { useParams } from 'next/navigation';

export async function GET(_request, { params }) {
  const id = useParams;

  const comment = comments.find((comment) => comment.id === parseInt(id));

  return Response.status(200).json(comment);
}
