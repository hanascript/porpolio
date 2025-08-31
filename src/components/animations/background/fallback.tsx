import Image from 'next/image';

export default function Fallback() {
  return (
    <div className='fixed top-0 -z-999 h-full w-full'>
      <Image
        src='/images/hanascript-bg.webp'
        alt='background'
        fill
      />
    </div>
  );
}
