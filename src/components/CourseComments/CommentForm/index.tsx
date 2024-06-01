'use client'

import { Card, CardHeader, CardTitle } from '../../ui/card'
import Content from './Content'

export default function CommentForm() {
  return (
    <Card className='h-min w-[30rem]'>
      <CardHeader>
        <CardTitle>Adicionar comentário</CardTitle>
      </CardHeader>
      <Content />
    </Card>
  )
}
