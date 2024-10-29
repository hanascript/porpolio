'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Download, EllipsisIcon } from 'lucide-react'

export const DownloadResume = () => {
  const handleDownload = () => {
    const resumePath = '/resume.pdf'

    const link = document.createElement('a')
    link.href = resumePath
    link.download = 'NathanMarcellous_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='focus:ring-0'>
        <Button
          variant='ghost'
          size='icon'
          className='hover:bg-primary-foreground'
        >
          <EllipsisIcon className='size-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end'>
        <DropdownMenuItem
          onClick={handleDownload}
          className='flex items-center gap-2 text-sm'
        >
          <Download className='size-5' /> DOWNLOAD RESUME
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
