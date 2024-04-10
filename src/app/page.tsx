import { Input } from '@/components/ui/input'
import GoogleMaps from '@/components/GoogleMaps'

export default function Home() {
  return (
    <main className='flex min-h-screen'>
      <Input
        className='absolute z-10 m-3 w-72'
        placeholder='Pesquisar cidade ou FATEC'
      />
      <GoogleMaps />
    </main>
  )
}
