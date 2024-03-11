import { useAtom } from "jotai";

import { commentsAtom } from "@/atoms/comments";

import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LikeButton({ commentId }: { commentId: number }) {
  const [comments, setComments] = useAtom(commentsAtom)
  const commentIndex = comments.findIndex(comment => comment.id === commentId)
  const { quantityLikes, liked } = comments[commentIndex]
  
  function handleButtonClick() {
    const updatedComments = comments.map((comment, index) => {
      if (index === commentIndex) {
        return {
          ...comment,
          quantityLikes: liked ?
            comment.quantityLikes - 1 :
            comment.quantityLikes + 1,
          liked: !liked
        }
      }

      return comment
    })

    setComments(updatedComments)
  }

  return (
    <Button
      className="flex items-center group p-0 pr-1 h-min bg-transparent hover:bg-transparent"
      onClick={handleButtonClick}
    >
      <Heart
        className={cn(
          "group-hover:stroke-red-600 rounded-full group-hover:bg-red-300",
          "p-1 transition-colors duration-500",
          liked ?
            "stroke-red-600 fill-red-600" :
            "stroke-gray-500 fill-transparent"
        )}
        size={28}
      />
      <span
        className={cn(
          "group-hover:text-red-600 text-sm font-medium leading-none",
          "transition-colors duration-500",
          liked ? "text-red-600" : "text-gray-500"
        )}
      >
        {quantityLikes}
      </span>
    </Button>
  )
}
