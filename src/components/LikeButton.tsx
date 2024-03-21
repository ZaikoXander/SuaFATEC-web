import { useSetAtom } from "jotai";

import { toggleCommentLikeByIdAtom } from "@/atoms/comments";

import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface LikeButtonProps {
  commentId: number
  quantityLikes: number
  liked: boolean
}

export default function LikeButton({
  commentId,
  quantityLikes,
  liked
}: LikeButtonProps) {
  const toggleCommentLikeById = useSetAtom(toggleCommentLikeByIdAtom)

  return (
    <Button
      className="flex items-center group p-0 pr-1 h-min bg-transparent hover:bg-transparent"
      onClick={() => toggleCommentLikeById(commentId)}
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
