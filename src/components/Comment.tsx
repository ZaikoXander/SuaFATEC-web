import { useAtomValue } from "jotai";

import { commentsAtom } from "@/atoms/comments";

import LikeButton from "./LikeButton";

export default function Comment({ id }: { id: number }) {
  const comments = useAtomValue(commentsAtom)
  const commentIndex = comments.findIndex(comment => comment.id === id)
  const { studentName, conclusionDate, content } = comments[commentIndex]

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
        <LikeButton commentId={id} />
      </div>
    </div>
  )
}
