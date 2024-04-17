import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

import { Github, Linkedin, type LucideIcon } from 'lucide-react'

interface MemberProps {
  photoUrl: string
  name: string
  githubUrl: string
  linkedinUrl: string
}

interface SocialMediaButtonLinkProps {
  url: string
  baseColor: string
  hoverColor: string
  name: string
  icon: LucideIcon
}

function SocialMediaButtonLink({
  url,
  baseColor,
  hoverColor,
  name,
  icon: Icon,
}: SocialMediaButtonLinkProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='link' className='group h-auto p-0' asChild>
            <Link href={url}>
              <Icon
                size={28}
                className={`fill-[${baseColor}] text-[${baseColor}] transition-colors group-hover:fill-[${hoverColor}] group-hover:text-[${hoverColor}]`}
              />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Meu {name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
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
