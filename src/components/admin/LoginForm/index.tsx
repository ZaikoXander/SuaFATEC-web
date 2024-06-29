import { Card, CardHeader, CardTitle } from '@/components/ui/card'

import Content from './Content'

export function LoginForm() {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
      </CardHeader>
      <Content />
    </Card>
  )
}
