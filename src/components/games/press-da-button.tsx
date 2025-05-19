'use client'

import { useState} from 'react'
import { Button } from '../ui/button'

export const PressDaButton = () => {

  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <Button onClick={handleClick}>
        Press Da Button
      </Button>
      <p>{counter}</p>
    </div>
  )
}