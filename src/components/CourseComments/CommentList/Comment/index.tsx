import LikeButton from './LikeButton'

interface CommentProps {
  id: number
  studentName: string
  content: string
  quantityLikes: number
  conclusionDate: string
  liked: boolean
}

export default function Comment({
  id,
  studentName,
  content,
  quantityLikes,
  conclusionDate,
  liked,
}: CommentProps) {
  return (
    <div className='flex h-min w-auto flex-col gap-2 px-4 py-2 sm:w-80'>
      <div className='flex items-center justify-between'>
        <span className='text-lg font-bold'>{studentName}</span>
        <span className='text-xs font-medium leading-none text-gray-500'>
          Término: <time>{conclusionDate}</time>
        </span>
      </div>
      <p className='leading-tight'>{content}</p>
      <div className='flex justify-end'>
        <LikeButton
          commentId={id}
          quantityLikes={quantityLikes}
          liked={liked}
        />
      </div>
    </div>
  )
}
