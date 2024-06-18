'use client'

import { ChangeEvent } from 'react'

import { useRouter } from 'next/navigation'

import { atom, useAtom, useSetAtom } from 'jotai'
import { adminAtom } from '@/atoms/admin'

import api from '@/lib/api'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface AdminsAuthResponse {
  admin: {
    id: number
    name: string
  }
  token: string
}

const credentialsAtom = atom({
  name: '',
  password: '',
})

export function LoginForm() {
  const [credentials, setCredentials] = useAtom(credentialsAtom)
  const setAdmin = useSetAtom(adminAtom)
  const router = useRouter()

  function handleCredentialsChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setCredentials((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSignIn() {
    try {
      const {
        data: { admin, token },
      } = await api.post<AdminsAuthResponse>('admins/auth', credentials)

      setAdmin(admin)
      localStorage.setItem('adminAuthToken', token)
      router.push('/admin/dashboard')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid gap-2'>
          <Label htmlFor='name'>Nome</Label>
          <Input
            id='name'
            name='name'
            type='text'
            placeholder='Gabriel'
            required
            onChange={handleCredentialsChange}
          />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='password'>Senha</Label>
          <Input
            id='password'
            name='password'
            type='password'
            required
            onChange={handleCredentialsChange}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full' onClick={handleSignIn}>
          Entrar
        </Button>
      </CardFooter>
    </Card>
  )
}
