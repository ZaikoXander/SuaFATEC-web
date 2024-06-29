import commentsApi from '@/lib/api/commentsApi'

import type { Comment } from '@/atoms/comments'

async function courseOffering(id: number): Promise<Comment[]> {
  const {
    data: { comments },
  } = await commentsApi.get<{ comments: Comment[] }>(
    'course-offering/' + id.toString(),
  )

  return comments
}

const from = {
  courseOffering,
}

export default from
