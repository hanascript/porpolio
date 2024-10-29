import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Send } from 'lucide-react'

export const Contact = () => {
  return (
    <section id='contact' className='pb-6'>
      <Card className='border-none shadow'>
        <CardHeader className='pb-4'>
          <CardTitle className='flex items-center gap-2 text-xs font-semibold uppercase leading-none tracking-tight text-primary-100'>
            <Send className='size-4' />
            Contact
          </CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-2'>Coming soon!</CardContent>
      </Card>
    </section>
  )
}
