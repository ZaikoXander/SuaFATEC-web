import { useSetAtom } from 'jotai'

import { removeNotApprovedCommentByIdAtom } from '@/atoms/notApprovedComments'

import commentsApi from '@/lib/api/commentsApi'

import { Button } from '@/components/ui/button'

interface CommentProps {
  id: number
  studentName: string
  content: string
  conclusionDate: string
}

export default function Comment({
  id,
  studentName,
  content,
  conclusionDate,
}: CommentProps) {
  const adminAuthToken = window.localStorage.getItem('adminAuthToken')

  const removeNotApprovedCommentById = useSetAtom(
    removeNotApprovedCommentByIdAtom,
  )

  const authorizedRequestConfig = {
    headers: { Authorization: 'Bearer ' + adminAuthToken },
  }

  async function deleteComment() {
    try {
      await commentsApi.delete(id.toString(), authorizedRequestConfig)

      removeNotApprovedCommentById(id)
    } catch (error) {
      console.error(error)
    }
  }

  async function approveComment() {
    try {
      await commentsApi.patch(
        id.toString() + '/approve',
        undefined,
        authorizedRequestConfig,
      )

      removeNotApprovedCommentById(id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flex h-min w-80 flex-col gap-2 px-4 py-2'>
      <div className='flex items-center justify-between'>
        <span className='text-lg font-bold'>{studentName}</span>
        <span className='text-xs font-medium leading-none text-gray-500'>
          Término: <time>{conclusionDate}</time>
        </span>
      </div>
      <p className='leading-tight'>{content}</p>
      <div className='mt-4 flex justify-between'>
        <Button variant='destructive' onClick={deleteComment}>
          Deletar
        </Button>
        <Button
          className='bg-green-600 text-gray-50 hover:bg-green-500 hover:text-white'
          onClick={approveComment}
        >
          Aprovar
        </Button>
      </div>
    </div>
  )
}
