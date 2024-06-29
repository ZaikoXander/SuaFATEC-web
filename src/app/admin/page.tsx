'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import adminsApi from '@/lib/api/adminsApi'

import { LoginForm } from '@/components/admin/LoginForm'
import Image from 'next/image'

export default function Admin() {
  const router = useRouter()

  useEffect(() => {
    const adminAuthToken = localStorage.getItem('adminAuthToken')

    async function validateToken() {
      try {
        await adminsApi.get('validate-token', {
          headers: { Authorization: 'Bearer ' + adminAuthToken },
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
    <main className='flex min-h-screen flex-col items-center justify-center gap-10'>
      <Image
        src='/logo.png'
        priority
        className='h-auto w-auto'
        alt='Logo'
        width={160}
        height={99.641379279}
      />
      <LoginForm />
    </main>
  )
}
