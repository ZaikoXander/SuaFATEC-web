import api from '@/lib/api'
import { useSetAtom } from 'jotai'

import { toggleCommentLikeByIdAtom } from '@/atoms/comments'

import { Button } from './ui/button'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LikeButtonProps {
  commentId: number
  quantityLikes: number
  liked: boolean
}

export default function LikeButton({
  commentId,
  quantityLikes,
  liked,
}: LikeButtonProps) {
  const toggleCommentLikeById = useSetAtom(toggleCommentLikeByIdAtom)

  async function dislikeComment() {
    await api.patch(`/comments/${commentId}/dislike`)
  }

  async function likeComment() {
    await api.patch(`/comments/${commentId}/like`)
  }

  async function handleButtonClick() {
    toggleCommentLikeById(commentId)
    if (liked) {
      await dislikeComment()
    } else {
      await likeComment()
    }
  }

  return (
    <Button
      className='group flex h-min items-center bg-transparent p-0 pr-1 hover:bg-transparent'
      onClick={handleButtonClick}
    >
      <Heart
        className={cn(
          'rounded-full group-hover:bg-red-300 group-hover:stroke-red-600',
          'p-1 transition-colors duration-500',
          liked
            ? 'fill-red-600 stroke-red-600'
            : 'fill-transparent stroke-gray-500',
        )}
        size={28}
      />
      <span
        className={cn(
          'text-sm font-medium leading-none group-hover:text-red-600',
          'transition-colors duration-500',
          liked ? 'text-red-600' : 'text-gray-500',
        )}
      >
        {quantityLikes}
      </span>
    </Button>
  )
}
