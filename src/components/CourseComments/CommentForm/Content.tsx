import { z } from 'zod'

import { useAtomValue } from 'jotai'
import { selectedCourseOfferingAtom } from '@/atoms/courseOfferings'

import { useToast } from '@/components/ui/use-toast'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import api from '@/lib/api'

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
import DateInput from './DateInput'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

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
      await api.post('/comments', {
        courseOfferingId: selectedCourseOffering.id,
        studentName,
        conclusionDate,
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
  )
}
