import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

import { Github, Linkedin } from 'lucide-react'

interface MemberProps {
  photoUrl: string
  name: string
  githubUrl: string
  linkedinUrl: string
}

export default function Member({
  photoUrl,
  name,
  githubUrl,
  linkedinUrl,
}: MemberProps) {
  return (
    <div className='flex flex-col items-center gap-y-1'>
      <Avatar className='h-40 w-40'>
        <AvatarImage src={photoUrl} alt={`${name} photo`} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <span className='text-lg font-semibold'>{name}</span>
      <nav className='flex w-4/5 justify-center gap-x-4'>
        <Link href={linkedinUrl}>
          <Linkedin size={28} color='#0077B5' fill='#0077B5' />
        </Link>
        <Link href={githubUrl}>
          <Github size={28} />
        </Link>
      </nav>
    </div>
  )
}
