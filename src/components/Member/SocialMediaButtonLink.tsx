import Link from 'next/link'

import { Button } from '../ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

import type { CSSProperties } from 'react'
import type { LucideIcon } from 'lucide-react'

interface SocialMediaButtonLinkProps {
  url: string
  baseColor: string
  hoverColor: string
  name: string
  icon: LucideIcon
}

export default function SocialMediaButtonLink({
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
            <Link href={url} target='_blank'>
              <Icon
                size={28}
                className={
                  'fill-[var(--base-color)] text-[var(--base-color)] transition-colors group-hover:fill-[var(--hover-color)] group-hover:text-[var(--hover-color)]'
                }
                style={
                  {
                    '--base-color': baseColor,
                    '--hover-color': hoverColor,
                  } as CSSProperties
                }
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
