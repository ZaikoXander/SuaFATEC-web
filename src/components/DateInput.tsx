import { Input } from './ui/input'
import { add } from 'date-fns'

import type { ChangeEvent } from 'react'

interface DateInputProps {
  onChange: (date: Date) => void
  className: string
}

export default function DateInput({ onChange, className }: DateInputProps) {
  return (
    <Input
      className={className}
      type='date'
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        onChange(add(new Date(event.target.value), { days: 1 }))
      }
    />
  )
}
