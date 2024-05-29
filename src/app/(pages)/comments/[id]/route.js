import { comments } from '../data';

export async function GET(_request, { params }) {
  const comment = comments.find((comment) => comment.id === parseInt(params.id));

  return Response.status(200).json(comment);
}
