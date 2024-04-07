import { Input } from '@/components/ui/input'
import GoogleMaps from '@/components/GoogleMaps'
import Member from '@/components/Member/Member'

const arthurLinkedin = 'https://www.linkedin.com/in/arthur-barbosa-28a28322a/'
const arthurGithubUrl = 'https://github.com/Arthurbhs'
const arthurGithubPhotoUrl = arthurGithubUrl + '.png'

export default function Home() {
  return (
    <main className='flex min-h-screen'>
      <Input
        className='absolute z-10 m-3 w-60'
        placeholder='Pesquisar cidade ou FATEC'
      />
      <GoogleMaps />
      <Member
        name='Arthur'
        photoUrl={arthurGithubPhotoUrl}
        linkedinUrl={arthurLinkedin}
        githubUrl={arthurGithubUrl}
      />
    </main>
  )
}
