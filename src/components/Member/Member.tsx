import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

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
        <Button variant='link' className='group h-auto p-0' asChild>
          <Link href={linkedinUrl}>
            <Linkedin
              size={28}
              className='fill-[#0077B5] text-[#0077B5] transition-colors group-hover:fill-[#005E93] group-hover:text-[#005E93]'
            />
          </Link>
        </Button>
        <Button variant='link' className='group h-auto p-0' asChild>
          <Link href={githubUrl}>
            <Github
              size={28}
              className='fill-[#0e1013] text-[#0e1013] transition-colors group-hover:fill-[#24292f] group-hover:text-[#24292f]'
            />
          </Link>
        </Button>
      </nav>
    </div>
  )
}
