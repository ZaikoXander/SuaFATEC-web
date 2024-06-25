'use client'

import { useRouter } from 'next/navigation'

import { useState } from 'react'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useSetAtom } from 'jotai'
import { adminAtom } from '@/atoms/admin'

import api from '@/lib/api'
import { AxiosError } from 'axios'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'

interface AdminsAuthResponse {
  admin: {
    id: number
    name: string
  }
  token: string
}

const formSchema = z.object({
  name: z
    .string({ required_error: 'O nome é obrigatório' })
    .min(1, 'O nome deve conter pelo menos 1 caractere'),
  password: z
    .string({ required_error: 'A senha é obrigatória' })
    .min(1, 'A senha deve conter pelo menos 1 caractere'),
})

export function LoginForm() {
  const setAdmin = useSetAtom(adminAtom)
  const router = useRouter()
  const [wrongCredentials, setWrongCredentials] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      password: '',
    },
  })

  async function onSubmit(credentials: z.infer<typeof formSchema>) {
    try {
      const {
        data: { admin, token },
      } = await api.post<AdminsAuthResponse>('admins/auth', credentials)

      setAdmin(admin)
      localStorage.setItem('adminAuthToken', token)
      setWrongCredentials(false)
      router.push('/admin/dashboard')
    } catch (error) {
      console.error(error)

      if (!(error instanceof AxiosError)) return

      if (error?.response?.data.error === 'Admin not found') {
        setWrongCredentials(true)
      }
    }
  }

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='name'
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
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {wrongCredentials && (
              <p className='text-sm text-red-500'>Nome ou senha incorretos.</p>
            )}
            <Button type='submit' className='w-full'>
              Entrar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
