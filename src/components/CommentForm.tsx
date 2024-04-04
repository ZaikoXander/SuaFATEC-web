'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import DateInput from './DateInput'

const formSchema = z.object({
  // Adicionar frases de validacao em portugues
  studentName: z.string().min(2).max(64),
  conclusionDate: z.date().max(new Date()),
  content: z.string().min(5).max(280),
})

export default function CommentForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Término do curso</FormLabel>
                  <FormControl>
                    <DateInput className='w-min' {...field} />
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
