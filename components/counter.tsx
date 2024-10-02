'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { MinusIcon, PlusIcon } from 'lucide-react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(prev => prev + 1)
  const decrement = () =>
    setCount(prev => {
      if (prev > 0) return prev - 1
      return prev
    })

  return (
    <div className='flex items-center gap-3'>
      <Button onClick={decrement}>
        <MinusIcon />
      </Button>
      <p>Current count: {count}</p>
      <Button onClick={increment}>
        <PlusIcon />
      </Button>
    </div>
  )
}
