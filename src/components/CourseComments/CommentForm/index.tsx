'use client'

import { Card, CardHeader, CardTitle } from '../../ui/card'
import Content from './Content'

import { cn } from '@/lib/utils'

export default function CommentForm({ className }: { className?: string }) {
  return (
    <Card className={cn('h-min w-full sm:w-[30rem]', className)}>
      <CardHeader>
        <CardTitle>Adicionar comentário</CardTitle>
      </CardHeader>
      <Content />
    </Card>
  )
}
