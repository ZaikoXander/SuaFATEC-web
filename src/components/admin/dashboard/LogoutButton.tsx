import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function LogoutButton() {
  const router = useRouter()

  function handleLogout() {
    localStorage.removeItem('adminAuthToken')
    router.push('/admin')
  }

  return (
    <Button className='ml-auto mr-3 mt-3 font-bold' onClick={handleLogout}>
      Deslogar
    </Button>
  )
}
