'use client';

export const Filter = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div className='fixed -z-10 top-0 w-full h-full flex items-center justify-center text-secondary flex-col'>
        <div className='relative'>
          <p className='m-0 leading-none font-satoshi font-black uppercase text-primary-100 text-[4rem] lg:text-[8rem]'>
            NATHAN
          </p>
          <p className='m-0 leading-none -mt-1 lg:-mt-6 font-satoshi font-black uppercase text-primary-100 text-[4rem] lg:text-[8rem]'>
            MARCELLOUS
          </p>

          <p className='relative uppercase text-primary-100 text-[0.6rem] lg:text-[0.875rem] bottom-2 lg:bottom-14 lg:mt-10 left-1 lg:left-3'>
            ver 011 01110 00001 10110 00101
          </p>
        </div>
      </div>
    </>
  );
};
