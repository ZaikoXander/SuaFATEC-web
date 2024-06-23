'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import api from '@/lib/api'

import NotApprovedCommentList from '@/components/admin/dashboard/NotApprovedCommentList'
import LogoutButton from '@/components/admin/dashboard/LogoutButton'

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
    <main className='flex min-h-screen flex-col'>
      <LogoutButton />
      <NotApprovedCommentList />
    </main>
  )
}
