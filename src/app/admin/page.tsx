'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import api from '@/lib/api'

import { LoginForm } from './LoginForm'

export default function Admin() {
  const router = useRouter()

  useEffect(() => {
    const adminAuthToken = localStorage.getItem('adminAuthToken')

    async function validateToken() {
      try {
        await api.get('/admins/validate-token', {
          headers: {
            Authorization: 'Bearer ' + adminAuthToken,
          },
        })

        router.push('/admin/dashboard')
      } catch (error) {
        console.error(error)
        localStorage.removeItem('adminAuthToken')
      }
    }

    if (!adminAuthToken) return

    validateToken()
  }, [router])

  return (
    <main className='flex min-h-screen items-center justify-center'>
      <LoginForm />
    </main>
  )
}
