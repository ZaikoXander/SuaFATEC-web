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
    <div className='flex flex-col items-center space-y-4 border border-solid border-purple-300 '>
      <div className='flex flex-col items-center space-y-4 border border-solid border-purple-300 '>
      <Avatar className='relative'>
        <AvatarImage className='border-2 border-solid border-black' src={photoUrl} alt={`${name} photo` } />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <p className='font-bold'>{name}</p>
      <div className="flex space-x-5" >
        <Link href={githubUrl}>
          <Github className="text-purple-600 h-6 w-6  ml-2 hover:text-purple-400 hover:animate-bounce"  />
        </Link>
        <Link href={linkedinUrl}>
          <Linkedin className=" text-blue-600 h-6 w-6  mr-2 hover:text-blue-400 hover:animate-bounce"/>
        </Link>
        </div>
      </div>
    </div>
  )
}


