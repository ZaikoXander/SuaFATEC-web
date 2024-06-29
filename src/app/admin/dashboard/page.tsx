'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import adminsApi from '@/lib/api/adminsApi'

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
        await adminsApi.get('validate-token', {
          headers: { Authorization: 'Bearer ' + adminAuthToken },
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
    <main className='flex min-h-screen sm:justify-between lg:px-16'>
      <div className='mx-auto my-auto hidden p-4 sm:block'>
        <Image
          src='/logo.png'
          priority
          className='h-auto w-auto'
          alt='Logo'
          width={385.46476611}
          height={240}
        />
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-2 p-4 sm:w-max'>
        <LogoutButton />
        <NotApprovedCommentList />
      </div>
    </main>
  )
}
