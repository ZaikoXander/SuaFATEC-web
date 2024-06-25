import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function LogoutButton() {
  const router = useRouter()

  function handleLogout() {
    localStorage.removeItem('adminAuthToken')
    router.push('/admin')
  }

  return (
    <Button className='w-[22.125rem] font-bold' onClick={handleLogout}>
      Deslogar
    </Button>
  )
}
