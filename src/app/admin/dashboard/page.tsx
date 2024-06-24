'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import api from '@/lib/api'

import NotApprovedCommentList from '@/components/admin/dashboard/NotApprovedCommentList'
import LogoutButton from '@/components/admin/dashboard/LogoutButton'
import Image from 'next/image'

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    const adminAuthToken = localStorage.getItem('adminAuthToken')

    function navigateToAdmin() {
      router.push('/admin')
    }

    async function validateToken() {
      try {
        await api.get('/admins/validate-token', {
          headers: {
            Authorization: 'Bearer ' + adminAuthToken,
          },
        })
      } catch (error) {
        console.error(error)
        localStorage.removeItem('adminAuthToken')
        navigateToAdmin()
      }
    }

    if (!adminAuthToken) navigateToAdmin()

    validateToken()
  }, [router])

  return (
    <main className='flex min-h-screen justify-between'>
      <div className='mb-auto ml-60 mr-auto mt-60'>
        <Image
          src='/logo.png'
          priority
          className='h-auto w-auto'
          alt='Logo'
          width={385.46476611}
          height={240}
        />
      </div>
      <div className='my-3 mr-3 flex flex-col gap-4'>
        <LogoutButton />
        <NotApprovedCommentList />
      </div>
    </main>
  )
}
