'use client'

import { useEffect, useState } from 'react'

export const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const formatTime = (date: Date) => {
    return date
      .toLocaleString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
      .toLowerCase()
  }

  return <div className='text-primary-100 uppercase'>{formatTime(time)}</div>
}
