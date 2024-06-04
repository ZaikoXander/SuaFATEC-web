'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useAtomValue } from 'jotai'
import { adminAuthTokenAtom } from '@/atoms/admin'

import NotApprovedCommentList from './NotApprovedCommentList'

export default function Dashboard() {
  const adminAuthToken = useAtomValue(adminAuthTokenAtom)
  const router = useRouter()

  useEffect(() => {
    if (!adminAuthToken) router.push('/admin')
  }, [adminAuthToken, router])

  return (
    <main className='flex min-h-screen'>
      <NotApprovedCommentList />
    </main>
  )
}
