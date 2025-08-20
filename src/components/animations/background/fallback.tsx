import Image from 'next/image';

export default function Fallback() {
  return (
    <div className='fixed -z-999 top-0 w-full h-full'>
      <Image src='/images/hanascript-bg.png' alt='background' fill />
    </div>
  )
}