'use client'

import { z } from 'zod'

import { useAtomValue } from 'jotai'
import { selectedCourseOfferingAtom } from '@/atoms/courseOfferings'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import request from '@/lib/request'

import { useToast } from '@/components/ui/use-toast'
import { CardContent } from '@/components/ui/card'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  studentName: z
    .string({ required_error: 'O nome é obrigatório' })
    .min(2, 'O nome deve conter pelo menos 2 caracteres')
    .max(64, 'O nome deve conter no máximo 64 caracteres'),
  conclusionDate: z
    .string({ required_error: 'A data de término do curso é obrigatória' })
    .refine(
      (value) => {
        const inputDate = new Date(value)
        const today = new Date()

        today.setHours(0, 0, 0, 0)
        return inputDate < today
      },
      { message: 'A data não pode ser no futuro' },
    ),
  content: z
    .string({ required_error: 'O conteúdo é obrigatório' })
    .min(5, 'O conteúdo deve conter pelo menos 5 caracteres')
    .max(280, 'O conteúdo deve conter no máximo 280 caracteres'),
})

export default function Content() {
  const selectedCourseOffering = useAtomValue(selectedCourseOfferingAtom)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: '',
      conclusionDate: undefined,
      content: '',
    },
  })

  async function onSubmit({
    studentName,
    conclusionDate,
    content,
  }: z.infer<typeof formSchema>) {
    if (!selectedCourseOffering) return

    try {
      toast({ title: 'Processando comentário...' })

      await request.comments.creation({
        courseOfferingId: selectedCourseOffering.id,
        studentName,
        conclusionDate: new Date(conclusionDate),
        content,
      })

      toast({ title: 'Comentário enviado com sucesso para revisão' })
    } catch (error) {
      console.error(error)
    }
  }

  return (
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
                  <Input type='date' className='w-min' {...field} />
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
  )
}
