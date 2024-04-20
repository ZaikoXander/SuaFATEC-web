'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { Textarea } from '../../ui/textarea'
import DateInput from './DateInput'

const formSchema = z.object({
  studentName: z
    .string({ required_error: 'O nome é obrigatório' })
    .min(2, 'O nome deve conter pelo menos 2 caracteres')
    .max(64, 'O nome deve conter no máximo 64 caracteres'),
  conclusionDate: z
    .date({
      required_error: 'A data de término do curso é obrigatória',
    })
    .max(new Date(), 'A data não pode ser no futuro'),
  content: z
    .string({ required_error: 'O conteúdo é obrigatório' })
    .min(5, 'O conteúdo deve conter pelo menos 5 caracteres')
    .max(280, 'O conteúdo deve conter no máximo 280 caracteres'),
})

export default function CommentForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: '',
      conclusionDate: undefined,
      content: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    console.log(form)
  }

  return (
    <Card className='h-min w-[30rem]'>
      <CardHeader>
        <CardTitle>Adicionar comentário</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='studentName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder='Gabriel Fernandes' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='conclusionDate'
              render={({ field: { onChange, onBlur } }) => (
                <FormItem>
                  <FormLabel>Término do curso</FormLabel>
                  <FormControl>
                    <DateInput
                      className='w-min'
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='content'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder='Escreva um comentário...'
                      className='h-40 resize-none'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>
              Enviar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
