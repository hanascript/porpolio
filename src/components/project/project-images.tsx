import Image from 'next/image';

export const ProjectImages = ({ values }: { values: { src: string; alt: string }[] }) => {
  return (
    <div className='bg-background rounded-xs overflow-hidden h-[300px]  relative mx-1'>
      <Image
        src={values[0].src}
        alt={values[0].alt}
        fill
        className='object-fill'
      />
    </div>
  );
};
