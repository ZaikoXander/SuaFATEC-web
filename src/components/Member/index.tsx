import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

import SocialMediaButtonLink from './SocialMediaButtonLink'

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
        <SocialMediaButtonLink
          url={linkedinUrl}
          baseColor='#0077B5'
          hoverColor='#005E93'
          name='LinkedIn'
          icon={Linkedin}
        />
        <SocialMediaButtonLink
          url={githubUrl}
          baseColor='#0e1013'
          hoverColor='#24292f'
          name='Github'
          icon={Github}
        />
      </nav>
    </div>
  )
}
