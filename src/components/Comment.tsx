import LikeButton from "./LikeButton";

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
  liked
}: CommentProps) {
  return (
    <div className="h-min px-4 py-2 w-80 gap-2 flex flex-col">
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">{studentName}</span>
        <span className="text-gray-500 text-xs font-medium leading-none">
          Término: <time>{conclusionDate}</time>
        </span>
      </div>
      <p className="leading-tight">{content}</p>
      <div className="flex justify-end">
        <LikeButton
          commentId={id}
          quantityLikes={quantityLikes}
          liked={liked}
        />
      </div>
    </div>
  )
}
